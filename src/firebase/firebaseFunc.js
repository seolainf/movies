import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getAllMovies = async () => {
  const querySnapshot = await getDocs(collection(db, "Movies"));
  let data = [];
  querySnapshot.docs.map((doc) => data.push({ id: doc.id, ...doc.data() }));
  return data;
};
/* useEffect(() => {
    const fecth = async () => {
      try {
        const data = await getAllMovies();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fecth();
  }, []); */
