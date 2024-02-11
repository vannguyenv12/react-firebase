import {
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from ".";

export async function getDocument(collectionName, documentId) {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }

  return null;
}

export async function getAllDocument(collectionName) {
  const result = [];

  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    result.push({ _id: doc.id, ...doc.data() });
  });

  return result;
}

export async function addDocument(collectionName, data) {
  const docRef = await addDoc(collection(db, collectionName), data);

  return docRef.id;
}

export async function updateDocument(collectionName, documentId, data) {
  const docRef = doc(db, collectionName, documentId);

  await updateDoc(docRef, data);
}

export async function deleteDocument(collectionName, documentId) {
  await deleteDoc(doc(db, collectionName, documentId));
}
