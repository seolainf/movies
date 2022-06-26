import React from "react";
import { NavLink } from "react-router-dom";
import "./submenu.scss";

const Submenu = ({ data, call, handleToggle }) => {
  const handleType = (type) => {
    call(type);
    handleToggle();
  };
  return (
    <div className="submenu">
      {data &&
        data.map((item, i) => (
          <NavLink
            to={item.path}
            className="navlink submenu__item"
            key={i}
            onClick={() => handleType(item.title)}
          >
            <span>{item.title}</span>
          </NavLink>
        ))}
    </div>
  );
};

export default Submenu;
