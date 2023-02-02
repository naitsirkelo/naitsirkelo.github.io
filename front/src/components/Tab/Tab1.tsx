import React, { useState } from "react";
import { FirebaseStorage } from "../../FirebaseStorage";
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore"

export const Tab1 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(inputValue);
    
    const f = FirebaseStorage;
    
    
  const firestore = getFirestore();
    firebase.collection("todos").add({
      id: uuid(),
      item: input
    });

  };

  return (
    <div className="Tab1">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Save</button>
        <p>aaa</p>
      </form>
    </div>
  );
};
