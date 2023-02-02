import React, { useState } from "react";
import { readFromDoc } from "../../FirebaseStorage";

export const Tab1 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(inputValue);

    readFromDoc();
  }

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
