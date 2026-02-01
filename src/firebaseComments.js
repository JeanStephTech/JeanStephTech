/*
// src/firebaseComments.js
import { db } from "./firebase";
import { collection, addDoc, query, orderBy, getDocs } from "firebase/firestore";

// Ajouter un commentaire
export const addComment = async (articleId, name, message) => {
  try {
    await addDoc(collection(db, "comments"), {
      articleId,
      name,
      message,
      createdAt: new Date()
    });
  } catch (err) {
    console.error("Erreur ajout commentaire :", err);
  }
};

// Récupérer les commentaires pour un article
export const getComments = async (articleId) => {
  const q = query(collection(db, "comments"), orderBy("createdAt", "asc"));
  const querySnapshot = await getDocs(q);
  const comments = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.articleId === articleId) {
      comments.push({ id: doc.id, ...data });
    }
  });
  return comments;
};
*/