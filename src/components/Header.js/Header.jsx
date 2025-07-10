import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper } from "./Header.styled";


const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <h1>Logo</h1>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </HeaderWrapper>
  );
};

export default Header;
