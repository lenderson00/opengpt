import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

import { app } from "./config"
import { saveUserInFirestore } from "./firestore"

const auth = getAuth(app)

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()

    try {
        const userInfo = await signInWithPopup(auth, provider)
        saveUserInFirestore(userInfo.user)
    } catch (error) {
        console.log(error)
    }

}






