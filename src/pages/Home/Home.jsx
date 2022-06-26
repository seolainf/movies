import { useEffect, useState } from "react";
import Grid from "../../components/Grid/Grid";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Section from "../../components/Section/Section";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getMoviesByCategory } from "../../firebase/firebaseFunc";
import "./home.scss";

const Home = () => {
  const [seriesMovies, setSeriesMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [animeMovies, setanimeMovies] = useState([]);
  useEffect(() => {
    const fecth = async () => {
      try {
        const siriesMoviesdata = await getMoviesByCategory("phim bộ");
        setSeriesMovies(siriesMoviesdata);
        const shortMoviesdata = await getMoviesByCategory("phim lẻ");
        setShortMovies(shortMoviesdata);
        const animeMoviesdata = await getMoviesByCategory("phim hoạt hình");
        setanimeMovies(animeMoviesdata);
      } catch (err) {
        console.log(err);
      }
    };
    fecth();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__main">
          <div className="home__main_item">
            <Section title={"Phim bộ mới"} fs={2} />
            <Grid col={4} mdCol={3} smCol={2} gap={30}>
              {seriesMovies &&
                seriesMovies.map((movies) => <MoviesCard key={movies.id} data={movies} />)}
            </Grid>
          </div>
          <div className="home__main_item">
            <Section title={"Phim lẻ mới"} fs={2} />
            <Grid col={4} mdCol={3} smCol={2} gap={30}>
              {shortMovies &&
                shortMovies.map((movies) => <MoviesCard key={movies.id} data={movies} />)}
            </Grid>
          </div>
          <div className="home__main_item">
            <Section title={"Phim hoạt hình mới"} fs={2} />
            <Grid col={4} mdCol={3} smCol={2} gap={30}>
              {animeMovies &&
                animeMovies.map((movies) => <MoviesCard key={movies.id} data={movies} />)}
            </Grid>
          </div>
        </div>
        <div className="home__sidebar">
          <Sidebar data={seriesMovies} title={"Phim bộ hot"} />
          <Sidebar data={shortMovies} title={"Phim lẻ hot"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
