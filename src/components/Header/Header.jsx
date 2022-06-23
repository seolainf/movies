import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menuData } from "../../assets/data/data";
import logo from "../../assets/images/logo.png";
import "./header.scss";

const Header = ({ call }) => {
  const [type, setType] = useState("");
  useEffect(() => {
    call(type);
  }, [type]);

  return (
    <div className="header">
      <Link to={"/"} className="link">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="header__nav">
        <div className="header__menu">
          {menuData.map((menu) => (
            <li className="header__menu_item" key={menu.id} onClick={() => setType(menu.title)}>
              <NavLink to={menu.path} className="header__navlink navlink">
                <span>{menu.title}</span>
              </NavLink>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
