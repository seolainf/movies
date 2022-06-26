import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesBySlug } from "../../firebase/firebaseFunc";
import "./watch.scss";

const Watch = () => {
  const { slug } = useParams();
  const [movies, setMovies] = useState({});
  const [video, setVideo] = useState("");
  const [videoActive, setVideoActive] = useState(null);

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
    movies.videos && setVideo(movies.videos[0]);
    movies.videos && setVideoActive(movies.videos[0]);
  }, [movies]);

  return (
    <div className="watch">
      <div className="watch__video">
        <video src={video} controls />
      </div>
      <div className="watch__list">
        <span className="watch__list_title">VietSub: </span>
        {movies.categories?.indexOf("phim lẻ") === -1 ? (
          movies.videos?.map((video, i) => (
            <div
              className={`watch__list_item ${videoActive === video ? "active" : ""}`}
              onClick={() => {
                setVideo(video);
                setVideoActive(video);
              }}
              key={i}
              title={`Tập ${i + 1}`}
            >
              <span>{i + 1}</span>
            </div>
          ))
        ) : (
          <div
            className={`watch__list_item ${videoActive === video ? "active" : ""}`}
            title={"Full"}
          >
            <span>Full</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watch;
