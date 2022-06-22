import { Link, NavLink } from "react-router-dom";
import { menuData } from "../../assets/data/data";
import logo from "../../assets/images/logo.png";
import "./header.scss";

const Header = () => {
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
            <li className="header__menu_item" key={menu.id}>
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
