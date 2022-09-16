import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';

export const SignUpUser = async (email, password) => {
    try
    {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (err)
    {
        return err;
    }
};