import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.Config";


export const AuthContext = createContext(null);

const ContextProvider = ({children}) => {

    const singUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authRef = {singUpUser, logInUser}

    return (
        <AuthContext.Provider value={authRef}>{children}</AuthContext.Provider>
    );
};

export default ContextProvider;