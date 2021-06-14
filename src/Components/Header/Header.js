import React from "react";
import header from "./Header.module.css";
import { Link } from "react-router-dom";
import burger from "../../Svg/burger.svg";
function Header() {
  return (
    <header className={header.header}>
      <div className={header.container}>
        <div className={header.favicon}>SPA</div>
        <div>
          <ul className={header.ul}>
            <li className={header.li}>
              <Link className={header.link} to="/">
                Каталог
              </Link>
            </li>
            <li className={header.li}>
              <Link className={header.link} to="/cart">
                Корзина
              </Link>
            </li>
            <li className={header.li}>
              <img src={burger} alt="burger" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
