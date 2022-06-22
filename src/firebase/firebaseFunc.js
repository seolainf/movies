import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getAllMovies = async () => {
  const moviesRef = collection(db, "Movies");
  const querySnapshot = await getDocs(moviesRef);
  let data = [];
  querySnapshot.docs.map((doc) => data.push({ id: doc.id, ...doc.data() }));
  return data;
};

export const getMoviesByCategory = async (category) => {
  const moviesRef = collection(db, "Movies");
  const q = query(moviesRef, where("categories", "array-contains-any", [`${category}`]));
  const querySnapshot = await getDocs(q);
  let items = [];
  querySnapshot.docs.map((doc) => items.push({ id: doc.id, ...doc.data() }));
  return items;
};

export const getMoviesBySlug = async (slug) => {
  const moviesRef = collection(db, "Movies");
  const q = query(moviesRef, where("slug", "==", `${slug}`));
  const querySnapshot = await getDocs(q);
  let items = [];
  querySnapshot.docs.map((doc) => items.push({ id: doc.id, ...doc.data() }));
  return items;
};

export const randomMovies = async (count) => {
  const data = await getAllMovies();
  const max = data.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return data.slice(start, start + count);
};
