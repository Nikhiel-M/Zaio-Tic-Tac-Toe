import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from "./Header.styled";
import {ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe-svgrepo-com.svg"


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <Logo  className="logo"/>
      <span onClick={() => toggleTheme()}>{theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}</span>
    
    </HeaderWrapper>
  );
};

export default Header;
