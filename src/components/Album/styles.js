import styled from "styled-components";

export const Container = styled.article`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Cover = styled.div`
  background: skyblue;
  width: 250px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Details = styled.article`
  padding-top: 1rem;
`;

export const Name = styled.h3`
  margin-bottom: 0.5rem;
  font-family: "Courier", Courier, monospace;
`;
