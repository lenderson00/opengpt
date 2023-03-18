import { User } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore"
import { app } from "./config"

export const db = getFirestore(app)

export const saveUserInFirestore = async (user: User) => {
    const userRef = doc(db, "users", user.uid)
    const snapshot = await getDoc(userRef)

    if (!snapshot.exists()) {
        const { displayName, email, photoURL } = user
    
        await setDoc(userRef, {
            displayName,
            email,
            photoURL,
            createdAt: serverTimestamp(),
        })
        
    }
}