import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage'; //img storage
import 'firebase/firestore'; //database

const firebaseConfig = {
  apiKey: "AIzaSyAUIIzBPEnMQqgh_NkBuDLxlCszXzuURIM",
  authDomain: "reactgalleryproject.firebaseapp.com",
  databaseURL: "https://reactgalleryproject-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactgalleryproject",
  storageBucket: "reactgalleryproject.appspot.com",
  messagingSenderId: "341660282744",
  appId: "1:341660282744:web:a2f5e48f72c3699bcda28d",
  measurementId: "G-2JXQPNNB19"
};
  
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
//returns the function
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };