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
//都是谷歌的代码，不用管
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider);
};

/**
 *
 * @param {object} userAuth 用户授权信息
 * @param {object} additionalData 额外的数据
 * 在数据库录入用户信息
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //如果没有登录的话直接返回
  if (!userAuth) return;
  //把google账号的uid作为id
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();

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
      console.log("create user profile failed:" + e.message);
    }
  }

  return userRef;
};
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
export default firebase;
