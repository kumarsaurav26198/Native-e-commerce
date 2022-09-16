import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';

export const LoginUser = async (email, password) => {
    try
    {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (err)
    {
        return err;
    }
};