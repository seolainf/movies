import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { getMoviesByCategory } from "./firebase/firebaseFunc";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Single from "./pages/Single/Single";
import Watch from "./pages/Watch/Watch";

function App() {
  const [moviesCateg, setMoviesCateg] = useState([]);
  const [type, setType] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMoviesByCategory(type);
        setMoviesCateg(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [type]);
  const handleType = (type) => {
    setType(type);
  };

  return (
    <div className="app">
      <div className="app__header">
        <Header call={handleType} />
      </div>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:slug" element={<Single />} />
          <Route path="/watch-movies/:slug" element={<Watch />} />
          <Route path="/category/*" element={<Movies data={moviesCateg} title={type} />} />
        </Routes>
      </main>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
