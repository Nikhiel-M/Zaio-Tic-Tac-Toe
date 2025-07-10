import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`
 *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: 'Mogra', system-ui;
   font-weight: 100;
   font-style: normal;
 }

 body {
  background-color: ${(props) => props.theme.colors.primary };
 }
`;

 


