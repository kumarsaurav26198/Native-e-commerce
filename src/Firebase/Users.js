import { db } from './firebaseConfig';
import { ref, set } from "firebase/database";

export const AddUser = async (uid, name, email, image ) => {
    try {
        return await set(ref(db, 'users/' + uid ), {
            name: name,
            email: email,
            image: image,
            uuid: uid
        });
    } catch (error) {
        return error;
    }
}
