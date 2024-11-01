'use client';

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

export default function AddComponent() {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [contents, setContents] = useState([])


  const insertContent = async (contentTitle: any, contentDescription: any) => {
    fetch("/api/contents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contentTitle,
        contentDescription
      }),
    },)
  }


  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);

    // Le champ doit être renseigné
    setIsValid(value.trim().length > 0);
  };
  const descriptionHandleChange = (e: any) => {
    const value = e.target.value;
    setDescription(value);

    // Le champ doit être renseigné
    setIsValid(value.trim().length > 0);
  };
  const titleHandleChange = (e: any) => {
    const value = e.target.value;
    setTitle(value);

    // Le champ doit être renseigné
    setIsValid(value.trim().length > 0);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isValid) {
        insertContent(title, description)
    //     // Pour réinitialiser le champ
    //     console.log("Submitted value: ", title, description);
    //   setInputValue("");


       // insertContent("Ceci est le titre", "Ceci est la description");
    // updateContent("contentTitle", "contentDescription", 27);
    // deleteContent(19);
  
  
    
    fetch("/api/contents")
    .then((res) => res.json())
    .then((data) => setContents(data.contents));
    // .then((data) => console.log("content", data))
    setTitle('')
    setDescription('')
    console.log("content", contents)
    } else {
      console.log("Input is invalid");
    }
  };


  return (
    <div style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={title}
        onChange={titleHandleChange}
        placeholder="Titre"
        className={`p-2 border ${
          isValid ? "border-gray-300" : "border-red-500"
        } rounded mb-4 focus:outline-none focus:ring focus:border-blue-300`}
      />

      <input
        type="text"
        value={description}
        onChange={descriptionHandleChange}
        aria-multiline={true}
        placeholder="Description"
        className={`p-2 border ${
          isValid ? "border-gray-300" : "border-red-500"
        } rounded mb-4 focus:outline-none focus:ring focus:border-blue-300`}
      />
      {!isValid && (
        <p className="text-red-500 mb-4">Le champ ne peut être vide!</p>
      )}
     {title} 
     {description} 
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Valider
      </button>
    </form>
    </div>
  );
}
