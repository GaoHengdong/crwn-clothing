import { takeLatest, put } from "redux-saga/effects";

import userActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  googleProvider,
} from "../../firebase/firebase.util";

export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithPopup;
  } catch (error) {}
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
