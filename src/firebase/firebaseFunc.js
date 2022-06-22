import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getAllMovies = async () => {
  const querySnapshot = await getDocs(collection(db, "Movies"));
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
