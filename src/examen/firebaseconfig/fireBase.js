
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCFVB9ybTzy_c1WMcXFHP4GEU4kNxWyRpM",
  authDomain: "hyv-crud-react.firebaseapp.com",
  projectId: "hyv-crud-react",
  storageBucket: "hyv-crud-react.appspot.com",
  messagingSenderId: "391002467390",
  appId: "1:391002467390:web:999b23234c276dfc7c756f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)