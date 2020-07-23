// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAZvWr-0ErRz5sLf15P8w6Ir5mL-zTxHb0",
  authDomain: "crwn-clothing-1f36f.firebaseapp.com",
  databaseURL: "https://crwn-clothing-1f36f.firebaseio.com",
  projectId: "crwn-clothing-1f36f",
  storageBucket: "crwn-clothing-1f36f.appspot.com",
  messagingSenderId: "346632522199",
  appId: "1:346632522199:web:551b630b83c80b5ad92392",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: "select_account" });

//通过auth使用，得到userAuth，也就是登录授权，这时候就可以用id去访问数据库了
//这里并没有返回userAuth，但是可以通过监听得到userAuth
export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(googleProvider);
};

/**
 *
 * @param {object} userAuth 用户授权
 * @param {object} additionalData 额外的数据
 * userRef就是访问数据库的钥匙，得到userRef就相当于登录成功
 * 这个userRef实际上是users里某个文档的ref
 * snapshot是userRef通过get()得到的，相当于数据
 * 第一次登陆的时候可能没有数据，所以要判断snapshot是否存在
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //如果没有登录的话直接返回
  if (!userAuth) return;
  //把google账号的uid作为id
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        creatAt,
        ...additionalData,
      });
    } catch (e) {
      throw new Error("create user profile failed:" + e.message);
    }
  }

  return userRef;
};
//通过firestore.collection(keyname)可以得到collectionRef
//firestore.batch是用来打包的工具
//批量打包异步请求，一次发送，从而减少发送次数
//这里是对集合里每一个object建立一个新的文档
//collectionKey就是集合的名字
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });
  return await batch.commit();
};
//这里的collections是collectionRef的snapshot
//也就是collectionRef get()而来的数据
//collections.docs可以得到一个collection所有doc的数组
//doc.data()可以得到doc存储的数据
//encodeURI是为了转化特殊字符，使得路径能够被浏览器识别
//先把snapshot的数据变成一个数组，然后再通过reduce改造成一个对象object
export const convertCollectionSnapshotToMap = (collections) => {
  const transfromedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transfromedCollection.reduce((a, collection) => {
    a[collection.title.toLowerCase()] = collection;
    return a;
  }, {});
};

//通过监听得到userAuth
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
