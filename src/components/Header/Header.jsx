import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menuData } from "../../assets/data/data";
import logo from "../../assets/images/logo.png";
import { getSearchMovies } from "../../firebase/firebaseFunc";
import "./header.scss";

const Header = ({ call }) => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const inputRef = useRef(null);

  const handleType = (type) => {
    call(type);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchText === "") {
          return;
        }
        const data = await getSearchMovies(searchText);
        console.log(data);
        setSearchData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [searchText]);
  useEffect(() => {
    setSearchText("");
  }, []);
  return (
    <div className="header">
      <div className="header__container">
        <Link to={"/"} className="link">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="header__search">
          <div className="header__search_input">
            <input
              type="text"
              placeholder="Nhập tên phim"
              onChange={(e) => setSearchText(e.target.value)}
              ref={inputRef}
            />
            <span>
              <i className="bx bx-search"></i>
            </span>
          </div>
          {searchData.length === 0 ? (
            <></>
          ) : (
            <div className="header__search_box">
              <div className="header__search_content">
                <span>Kết quả tìm kiếm</span>
                {searchData &&
                  searchData.map((item) => (
                    <div className="header__search_item" key={item.id}>
                      <span>{item.title}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="header__nav">
        <div className="header__menu">
          {menuData.map((menu) => (
            <li className="header__menu_item" key={menu.id} onClick={() => handleType(menu.title)}>
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
