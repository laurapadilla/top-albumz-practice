import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background: #121212;
  font-family: 'Helvetica Neue';
  font-size: 16px;
  color: #fff;
  padding: 2rem;
}
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const H1 = styled.h1`
  font-size: 3rem;
`;

export const A = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
`;
