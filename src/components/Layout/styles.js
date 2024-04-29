import styled from "styled-components";

export const Nav = styled.nav`
    background: ${(props) => props.theme.headerBackgroundColor};
    margin-top: 16px;
    padding: 16px;
    border-radius: 4px;
  
    a {
    color: white;
    text-decoration: none;
    display: inline-block;

      & + a {
        margin-left: 16px
      }
  }

`;