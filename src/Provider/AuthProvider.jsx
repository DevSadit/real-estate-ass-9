import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)

    const creatUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, usr=>{
            console.log(`vallue of the current user`, usr),
            setUser(usr);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = { user, creatUser, logOut, loginUser , };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;