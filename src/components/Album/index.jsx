import React from "react";
import { Container, Cover, Details, Name } from "./styles";

const Album = () => (
  <>
    <Container>
      <Cover>Cover Art</Cover>
      <Details>
        <Name>Album Name</Name>
        <p>Year</p>
      </Details>
    </Container>
  </>
);

export default Album;
