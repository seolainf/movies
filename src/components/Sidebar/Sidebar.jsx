import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Section from "../Section/Section";
import "./sidebar.scss";

const Sidebar = ({ data, title }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <Section title={title} fs={1.2} />
      </div>
      <div className="sidebar__container">
        {data.map((items) => (
          <Link to={`/movies/${items.slug}`} key={items.id} className="link">
            <div className="sidebar__item">
              <div className="sidebar__item_img">
                <img src={items.images} alt="" />
              </div>
              <div className="sidebar__item_title">
                <span>{items.title}</span>
                <span>{items.YOM}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default Sidebar;
