"use client";

import firebase from "firebase/compat/app";
import { auth, collection, db, onSnapshot, query } from "../../components/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useRouter } from "next/navigation";
// import { db, todolistsCoursesRef } from "../../components/Chat/Chat";

import SignIn from "../login/SignIn";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";


// import Chat from "../../components/Chat/Chat"


function Home() {

  useEffect(()=>{
    // addToFirestore()
    
    let unsubscribeCourses;
    // export async function queryForCoursesDocuments(){
      const coursesQuery = query(
        collection(db, 'todolists'),
        // where('todolists', '==', 'courses')
      );
      const coursesData: any = [];
      unsubscribeCourses = onSnapshot(
        coursesQuery,
        (QuerySnapshot) => {
      // console.log('JSON.stringify', JSON.stringify(QuerySnapshot.docs))
      // console.log('JSON.stringify', JSON.stringify(QuerySnapshot.docs.map((e) => e.data())[0].courses))
      // console.log('JSON.stringify', JSON.stringify(QuerySnapshot.docs.map((e) => e.data())))
      // coursesData.push({ ...QuerySnapshot.docs.map((e) => e.data()['toilette'])});
      // console.log('coursesData', Object.values(coursesData[0][1]))
      // coursesData.push({ ...QuerySnapshot.docs.map((e) => e.data())[0].courses})
      QuerySnapshot.docs.map((e) => coursesData.push({...e.data()}))
      // console.log('coursesDataok', coursesData)
      return coursesData
        })
    // }
  // )}
  },[])

  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!: {error.message}</div>;

  const Login = () => (
    <div>
      <h2>Please login</h2>
      <button
        onClick={async() =>
          // auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
          // await firebase.auth().signInWithPopup(provider)
          console.log('signInWithPopup', "signInWithPopup")
        }
      >
        Sign in with Google
      </button>
    </div>
  );

  // const router = useRouter();
  // <PlusButton onClick={() => router.push("/edit")} />

  return (
    <div>
      <div>
        {user ? (
          <>
          <div>Bienvenue {user.displayName}</div>
          {/* <Component {...pageProps} /> */}
          {/* <Chat /> */}
          <button
              onClick={() =>
                auth.signOut()
              }
            >
              Deconnexion
            </button>
          </>
        ) : (
          <Login />
          // <SignIn />
        )}
      </div>
    </div>
  );
}

export default Home;
