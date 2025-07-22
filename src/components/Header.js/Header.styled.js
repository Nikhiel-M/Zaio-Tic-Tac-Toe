import styled from "styled-components";
import {MdOutlineLightMode, MdOutlineDarkMode} from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  padding: 1.7rem;

.logo {
  height: 4.5rem;
  width: 4.5rem;
  fill: ${(props) => props.theme.colors.text };
  cursor: pointer;
}

`

export const LightModeIcon = styled(MdOutlineLightMode)`
fill: ${(props) => props.theme.colors.text };
font-size: 2rem;
  cursor: pointer;
`;

export const DarkModeIcon = styled(MdOutlineDarkMode)`
fill: ${(props) => props.theme.colors.text };
font-size: 2rem;
  cursor: pointer;
`;
