import styled from "styled-components";

// Container for the albums
export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
