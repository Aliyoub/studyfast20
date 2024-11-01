"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useRouter } from "next/navigation";
import LongPressDoublePressComponent from "../../components/LongPressDoublePressComponent";
import PlusButton from "../../components/PlusButton";


const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [items, setItems] = useState([]);
  const [contents, setContents] = useState<any[]>([]);
  const [contentsLength, setContentsLength] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // On récupère les données depuis la base de données dès le premier montage du composant
    // et on ne recupère plus les données depuis la base de données, on gère la suite avec le state,
    // le but étant de limiter les accès à la base données
    // Par contre, on devra accéder à la base de données pour
    // un ajout, une mise à jour, une suppression

    fetch("/api/contents")
      .then((res) => res.json())
      .then((data) => {
        // Pour récupérer l'id du dernier enregistrement dans la table contents,
        // on en a besoin lors de l'ajout de data dans le state contents.
        // Voir plus bas dans la fonction addContent
        // setContentsLength(data.contents[data.contents.length - 1].id);
        setContents(data.contents);
        console.log("all data", data);
      });
    // console.log("content!!", data.contents);
    // deleteContent(85)
    // deleteContent(86)
    // deleteContent(87)
    // deleteContent(88)
    // deleteContent(89)
  }, []);

  const deleteContent = async (id: number) => {
    fetch("/api/contents", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    });
  };

  const dispatch = useDispatch<AppDispatch>();

  // On récupère les valeurs d'un item après un clic dessus
  const getItemValues = (item: any) => {
    setSelectedItem(item);
    console.log("getItemValues", item);
  };

  const router = useRouter();

  
  return (
    <>
      <div
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          width: "100%",
        }}
      >
        <div>
          <h1>contents List</h1>
          <List>
            {contents.map((content) => (
              <LongPressDoublePressComponent key={content.id}>
                <ListItem
                  sx={{
                    borderBottom: "1px solid",
                    borderColor: "#EEE",
                    color: "#B2B8C1",
                    fontWeight: "bold",
                  }}
                  key={content.id}
                >
                  {content.contentTitle}
                </ListItem>
              </LongPressDoublePressComponent>
            ))}
          </List>
        </div>

        <PlusButton onClick={() => router.push("/edit")} />
      </div>
    </>
  );
};

export default Page;
