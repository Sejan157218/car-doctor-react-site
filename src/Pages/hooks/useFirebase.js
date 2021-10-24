import { useEffect, useState } from "react"
import initializeAuthentication from "../Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = ()=>{
 const [user,setUser] = useState({});
 const [isLoading,setIsloading] = useState(true)

 const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();
 const signInWithGoogle=()=>{
  setIsloading(true)
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    setUser(result.user);
  })
  .finally(()=>setIsloading(false));
 }

 const logOut=()=>{
  setIsloading(true)
    signOut(auth).then(() => {

      }).finally(()=>setIsloading(false))
 }

 useEffect(()=>{
   const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
          setUser({});
        }
        setIsloading(false)
      });
      return () => unsubscribed;
 },[])
 return {
    user,
    isLoading,
    signInWithGoogle,
    logOut,
 }
}

export default useFirebase;