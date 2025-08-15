import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props => props.theme.colors.secondary)};
  color: ${(props => props.theme.colors.primary)};
  font-size: 4rem;
  border: none;
  width: 10rem;
  height: 10rem;
  border-radius: 2rem;
  box-shadow: 5px 10px ${(props => props.theme.colors.cream)};
  cursor: pointer;
  padding: 3rem;

  .CircleIcon {
        path {
    stroke: ${(props => props.theme.colors.primary)};
    stroke-width: 2;
    }
  }
  

  .IconOutline{
    path {
      fill: none;
      stroke-width: 0;
    }
  }

  &:hover {
    .IconOutline{
    path {
    stroke: ${(props => props.theme.colors.primary)};
    stroke-width: 3;
    }
  }
  }

${(props) => props.theme.media.mobile} {
  font-size: 1rem;
  padding: 0;

   svg {
    font-size: 5rem;
    min-width: 3rem;
    min-height: 3rem;
  }
}
`;

