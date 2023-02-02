import firebase from "./firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";

export const FirebaseStorage = () => {

  const database = getDatabase();

  const writeUserData = (text: string) => {
    const db = getDatabase();
    set(ref(db, 'docId1/'), {
      input: text
    });
  }


}