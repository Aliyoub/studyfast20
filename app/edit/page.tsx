"use client";

import { addContent } from "@/store/slices/content/contentSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { useRouter } from "next/navigation";

export default function InputComponent() {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [items, setItems] = useState([]);
  const [contents, setContents] = useState<any[]>([]);
  const [contentsLength, setContentsLength] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [count, setCount] = useState(0);

  const router = useRouter();

  const addContent = async (e: any) => {
    e.preventDefault();
    if (isValid) {
      // setContentsLength(contentsLength + 1);
      // setContents([
      //   ...contents,
      //   {
      //     id: contentsLength + 1,
      //     contentTitle: e.target[0].value,
      //     contentDescription: e.target[1].value,
      //     isSelectedItem: 0
      //   },
      // ]);

      const response = await fetch("/api/contents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contentTitle: e.target[0].value,
          contentDescription: e.target[1].value,
          isSelectedItem: 0,
        }),
      });

      //  insertContent(e.target[0].value, e.target[1].value, 0);

      const data: any = await response.json();
      if (data.success === true) router.push("/contents");
      else return;

      setTitle("");
      setDescription("");

      console.log("content!!", contents);
    } else {
      console.log("Input is invalid");
    }
  };

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

  // On récupère les valeurs d'un item après un clic dessus
  const getItemValues = (item: any) => {
    setSelectedItem(item);
    console.log("getItemValues", item);
  };

  const dispatch = useDispatch<AppDispatch>();

  const insertContent = async (
    contentTitle: any,
    contentDescription: any,
    isSelectedItem: number
  ) => {
    fetch("/api/contents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contentTitle,
        contentDescription,
        isSelectedItem,
      }),
    });
  };

  const updateContent = async (
    contentTitle: any,
    contentDescription: any,
    id: number
  ) => {
    fetch("/api/contents", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contentTitle,
        contentDescription,
        id,
      }),
    });
  };

  const deleteContent = async (id: number) => {
    fetch("/api/contents", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    });
  };

  useEffect(() => {
    // insertContent("Ceci est le titre", "Ceci est la description");
    // updateContent("contentTitle", "contentDescription", 27);
    // deleteContent(19);

    fetch("/api/contents")
      .then((res) => res.json())
      // .then((data) => setContents(data));
      .then((data) => console.log("content", data));
    console.log("content", contents);
  }, []);

  return (
    <div style={{ marginTop: 30 }}>
      <form
        onSubmit={addContent}
        className="flex flex-col justify-center items-center"
      >
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
          className="bg-blue-500 text-white py-1.5 px-12 rounded"
        >
          Valider
        </button>
        {/* <button
          type="submit"
          className="bg-blue-500 text-white mt-1 py-1.5 px-12 rounded"
        >
          Annuler
        </button> */}
      </form>
    </div>
  );
}
