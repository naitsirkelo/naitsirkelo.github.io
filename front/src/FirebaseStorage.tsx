import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";
import db from "./firebaseConfig"

export const readFromDoc = async () => {
  console.log("start");

  const querySnapshot = await getDocs(collection(db, "text"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    console.log(doc.id, " --> ", doc.id, doc.metadata, doc.ref);
    

  });

  const db2 = getDatabase();
  const starCountRef = ref(db2, 'text/docId1');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}