import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Section from "../../components/Section/Section";
import { getMoviesBySlug, randomMovies } from "../../firebase/firebaseFunc";
import "./single.scss";

const Single = () => {
  const { slug } = useParams();
  const [movies, setMovies] = useState({});
  const [recomMovies, setRecomMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMoviesBySlug(slug);
        setMovies(...data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [slug]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await randomMovies(5);
      setRecomMovies(data);
    };
    fetchData();
  }, []);

  return (
    <div className="single">
      <div className="single__container">
        <div className="single__moviesImg">
          <img src={movies.images} alt="" />
          <div className="single__moviesBtn">
            <Link className="link" to={`/watch-movies/${movies.slug}`}>
              <span>Xem phim</span>
            </Link>
          </div>
        </div>
        <div className="single__moviesInfo">
          <span className="single__moviesInfo_title">{movies.title}</span>
          <div className="single__moviesInfo_item">
            <small>Đạo diễn:</small>
            <span> {movies.director}</span>
          </div>
          <div className="single__moviesInfo_item">
            <small>Diễn viên:</small>
            {movies.actors?.map((actor, i) => (
              <span key={i}> {actor}, </span>
            ))}
          </div>
          <div className="single__moviesInfo_item">
            <small>Thời lượng:</small>
            {movies.categories?.indexOf("phim lẻ") === -1 ? (
              <span> {movies.duration} Phút/tập</span>
            ) : (
              <span> {movies.duration} Phút</span>
            )}
          </div>
          <div className="single__moviesInfo_item">
            <small>Trạng thái:</small>
            {movies.categories?.indexOf("phim lẻ") === -1 ? (
              <span> Tập {movies.videos?.length} VietSub</span>
            ) : (
              <span> VietSub 720p</span>
            )}
          </div>
          <div className="single__moviesInfo_item">
            <small>Năm sản xuất:</small> <span>{movies.YOM}</span>
          </div>
          <div className="single__moviesInfo_item">
            <small>Quốc gia:</small> <span>{movies.country}</span>
          </div>
          <div className="single__moviesInfo_item">
            <small>Thể loại:</small>{" "}
            <span>
              {movies.categories && movies.categories?.length >= 2
                ? movies.categories && movies.categories[1]
                : movies.categories && movies.categories[0]}
            </span>
          </div>
          <div className="single__moviesInfo_item">
            <small>Nội dung:</small> <p>{movies.desc}</p>
          </div>
        </div>
      </div>
      <div className="single__recom">
        <Section title={"Phim được đề xuất"} fs={2} />
        <Grid col={5} mdCol={3} smCol={1} gap={30}>
          {recomMovies && recomMovies.map((item) => <MoviesCard key={item.id} data={item} />)}
        </Grid>
      </div>
    </div>
  );
};

export default Single;
