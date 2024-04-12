import React from "react";
import s from "./nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={s.nav_wrapper}>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/pool" className={s.pages} activeClassName={s.active}>
              <div className={s.navbar_div}>
                  Pool
              </div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" className={s.pages} activeClassName={s.active}>
              <div className={s.navbar_div}>
                  Settings
              </div>
          </NavLink>
        </div>
        <p className={s.by}>by Sailaukan</p>
      </nav>
    </div>
  );
};

export default Nav;
