import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./moviecard.scss";

const MoviesCard = ({ data }) => {
  return (
    <div className="moviesCrad">
      <Link to={`/movies/${data.slug}`} className="link">
        <div className="moviesCrad__info" title={data.title}>
          <img src={data.images} alt="" />
          <div className="moviesCrad__title">
            <span>{data.title}</span>
          </div>
          <div className="moviesCrad__status">
            {data.categories.indexOf("phim lẻ") !== -1 ? (
              <span>VietSub 720p</span>
            ) : (
              <span>Tập {data.videos.length} VietSub</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

MoviesCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MoviesCard;
