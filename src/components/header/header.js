import React from "react";
import s from "./header.module.css"

const Header = () =>{
return(
    <header className={s.header}>
      <h1 className={s.title}>Unitask</h1>
    </header>
)
}

export default Header;