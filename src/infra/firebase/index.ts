import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const handleLogIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    if (!result) throw new Error("No result found");
    // The signed-in user info.
    const user = result.user;
    console.log(user);
  } catch (e: any) {
    const errorCode = e.code;
    const errorMessage = e.message;
    const email = e.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(e);
  } finally {
  }
};
