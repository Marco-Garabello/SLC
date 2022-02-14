
// import { async } from '@firebase/util';
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, deleteDoc, query, where, getDocs } from 'firebase/firestore/lite';
import { firebase_app } from './firebase_config';

const db = getFirestore();

export async function read_doc(coll, docname) {
    try {
        let res = undefined;
        const document = await getDoc(doc(db, coll, docname));

        if (document.exists())
            res = document.data();

        return res;
    } catch (e) {
        console.log("Error read doc");
    }
}