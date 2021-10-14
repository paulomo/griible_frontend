import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyACx420Ut154f7IntI1b0CBjbNBw9-zjh0",
  authDomain: "instagramcopy-cf410.firebaseapp.com",
  projectId: "instagramcopy-cf410",
  storageBucket: "instagramcopy-cf410.appspot.com",
  messagingSenderId: "787576431616",
  appId: "1:787576431616:web:ffb393cc2c652a6662a4e5",
  measurementId: "G-W7KEQ1X9GE",
});

export const auth = app.auth();
export default app;
