import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDFNPJoAO7sBA6yrdjvUE2KDJirVHrFLrM",
    databaseUrl: "https://reactnativeauth-bb27d-default-rtdb.firebaseio.com/",
    projectId: "reactnativeauth-bb27d",
    appId: "1:1028679670064:android:a6d335dd5ec5810ca650f5"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth();

export { db, auth };