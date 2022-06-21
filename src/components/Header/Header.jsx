import { Link, NavLink } from "react-router-dom";
import { menuData } from "../../assets/data/data";
import logo from "../../assets/images/logo.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to={"/"} className="link">
          <img src={logo} alt="" />
        </Link>
      </div>
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
