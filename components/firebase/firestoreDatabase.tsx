import {
  getFirestore,
  collection,
  doc,
  getDocs,
  Timestamp,
  FieldValue,
  setDoc,
  addDoc,
  onSnapshot,
  QuerySnapshot,
  query,
  where,
  db
} from "./firebase";



// import { tasksListArray } from "./database/sqlRequests";





export const addToFirestore = () => {
  const todolists = doc(db, "todolists/mestaches");
  const docData = {
    tasks: "tasksListArray[0]",
  };
  setDoc(todolists, docData);
  console.log('addToFirestore', todolists)
}
// export const exportToFirestore = () => {
//   const todolists = doc(db, "todolists/mestaches");
//   const docData = {
//     tasks: tasksListArray[0],
//   };
//   setDoc(todolists, docData);
//   console.log('tasksListArray', tasksListArray)
// }


// export async function readAsingleDocument(){
//   const mySnapshot = await getDocs(todolistsCoursesRef)
//   if (mySnapshot.exists()){
//     const docData = mySnapshot.data();
//     console.log('docData', JSON.stringify(docData))
//   }
// }

// export const todolistsCourses = getDocs(todolistsCoursesRef).then((snapshot) => {
//   let collection = [];
//   snapshot.docs.forEach((doc) => {
//     collection.push({ ...doc.data(), id: doc.id });
//     console.log('collection!!!', collection)
//   });
// });




export const colRef = collection(db, "todolists")
export const colRef2 = collection(db, "messages")
// export const querySnapshot = getDocs(colRef).then((snapshot) => {
//   let collection = [];
//   snapshot.docs.forEach((doc) => {
//     collection.push({ ...doc.data(), id: doc.id });
//   });
//   return collection
  
// });

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// =========================================

// export const tasksRef = doc(db, "todolists", "tasks2");

// export const addTasks = async (myTask) => {
//   await updateDoc(tasksRef, {
//     tasks: arrayUnion(myTask),
//   });
// };

// const tasksRef = db.collection("tasks").doc();
// const tasksRef = doc(db, "todolists", "courses");
export const addMessageToFirestore = async (message: any) => {
  await addDoc(collection(db, "testons"), message)
    .then((docRef2) => {
      console.log("Document successfully written! with this id:", docRef2.id);
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
// export const addTasksToDB = async (myTask) => {
//   await addDoc(collection(db, "tasks"), myTask)
//     .then((docRef) => {
//       console.log("Document successfully written! with this id:", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error writing document: ", error);
//     });
// };



// export const updateTaskInDB = async (
//   myTaskId, // myTaskId est l'id du document à mettre à jour
//   {text,
//   comment,
//   highlightedStatus,
//   notification}
// ) => {
//   const taskRef = doc(db, "tasks", myTaskId);
//   await updateDoc(taskRef, {
//     text,
//     comment,
//     highlightedStatus,
//     notification,
//   });
// };

// export const deleteTasksFromDB = async (myTaskId) => {
//   await deleteDoc(doc(db, "tasks", myTaskId));
// };

// export const deleteTasksFromDB = async (myTaskId) => {
//   await updateDoc(tasksRef, {
//     tasks: arrayRemove(myTaskId),
//   });
// };