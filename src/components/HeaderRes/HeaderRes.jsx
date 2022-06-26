import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { subMenu } from "../../assets/data/data";
import logo from "../../assets/images/logo.png";
import Submenu from "../Submenu/Submenu";
import "./headerRes.scss";

const HeaderRes = ({ call }) => {
  const [openMenu, setOpenMmenu] = useState("");
  const menu = useRef(null);
  const menuToggle = () => menu.current.classList.toggle("active");

  const handleType = (type) => {
    call(type);
    menuToggle();
  };

  const handleActive = (item) => {
    setOpenMmenu(item);
  };

  return (
    <div className="headerRes">
      <div className="headerRes__logo">
        <Link to={"/"} className="link">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="headerRes__search">
        <input type="text" placeholder="Nhập tên phim" />
        <span>
          <i className="bx bx-search"></i>
        </span>
      </div>
      <div className="headerRes__menu">
        <div className="headerRes__menu_icon" onClick={menuToggle}>
          <i className="bx bx-menu-alt-right"></i>
        </div>

        <div className="headerRes__menu_list" ref={menu}>
          <div className="headerRes__menu_item" onClick={menuToggle}>
            <NavLink to={"/"} className="navlink">
              Home
            </NavLink>
          </div>
          {subMenu &&
            subMenu.map((item, i) => (
              <div className={`headerRes__menu_item ${openMenu === item ? "active" : ""}`} key={i}>
                <div className="headerRes__menu_title">
                  <span>{item.title}</span>
                  <i className="bx bx-plus" onClick={() => handleActive(item)}></i>
                </div>
                <Submenu data={item.children} call={call} handleToggle={menuToggle} />
              </div>
            ))}
          <div className="headerRes__menu_item" onClick={() => handleType("phim bộ")}>
            <NavLink to={"/category/phimbo"} className="navlink">
              Phim bộ
            </NavLink>
          </div>
          <div className="headerRes__menu_item" onClick={() => handleType("phim lẻ")}>
            <NavLink to={"/category/phimle"} className="navlink">
              Phim lẻ
            </NavLink>
          </div>
          <div className="headerRes__menu_item" onClick={() => handleType("phim chiếu rạp")}>
            <NavLink to={"/category/phimchieurap"} className="navlink">
              Phim chiếu rạp
            </NavLink>
          </div>
          <div className="headerRes__menu_item" onClick={() => handleType("tv show")}>
            <NavLink to={"/category/tvshow"} className="navlink">
              TV Show
            </NavLink>
          </div>
          <div className="headerRes__menu_close" onClick={menuToggle}>
            <i className="bx bx-x"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRes;
