import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`
 *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: 'popins', sans-serif;
   font-weight: 100;
   font-style: normal;
 }

  ${({ theme }) => theme.media.mobile} {
    * {
      font-size: 0.5rem;
    }
  }

 body {
  background-color: ${(props) => props.theme.colors.primary };
 }
`;

//    font-family: 'Mogra', system-ui;
 


