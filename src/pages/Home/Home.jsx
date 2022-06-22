import { useEffect, useState } from "react";
import Grid from '../../components/Grid/Grid';
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Section from "../../components/Section/Section";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getMoviesByCategory } from "../../firebase/firebaseFunc";
import './home.scss';

const Home = () => {
  const [seriesMovies, setSeriesMovies] = useState([])
  const [shortMovies, setShortMovies] = useState([])
  useEffect(() => {
    const fecth = async () => {
      try {
        const data = await getMoviesByCategory("phim bộ");
        setSeriesMovies(data)
      } catch (err) {
        console.log(err);
      }
    };
    fecth();
  }, []);
  useEffect(() => {
    const fecth = async () => {
      try {
        const data = await getMoviesByCategory("phim lẻ");
        setShortMovies(data)
      } catch (err) {
        console.log(err);
      }
    };
    fecth();
  }, []);

  return <div className="home">
    <div className="home__container">
      <div className="home__main">
        <Section title={"Phim bộ mới cập nhật"} fs={2} />
        <Grid col={4} mdCol={3} smCol={2} gap={30}>
          {seriesMovies && seriesMovies.map(movies =>
            <MoviesCard key={movies.id} data={movies} />
          )}
        </Grid>
      </div>
      <div className="home__sidebar">
        <Sidebar data={seriesMovies} title={'Phim bộ hot'} />
      </div>
    </div>
    <div className="home__container">
      <div className="home__main">
        <Section title={"Phim lẻ mới cập nhật"} fs={2} />
        <Grid col={4} mdCol={3} smCol={2} gap={30}>
          {shortMovies && shortMovies.map(movies =>
            <MoviesCard key={movies.id} data={movies} />
          )}
        </Grid>
      </div>
      <div className="home__sidebar">
        <Sidebar data={shortMovies} title={'Phim lẻ hot'} />
      </div>
    </div>
  </div>;
};

export default Home;
