import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from "./Header.styled";
import {ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe-svgrepo-com.svg"
import { useNavigate } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <Logo  className="logo" onClick={() => navigate("/")} />
      <span onClick={() => toggleTheme()}>{theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}</span>
    
    </HeaderWrapper>
  );
};

export default Header;
