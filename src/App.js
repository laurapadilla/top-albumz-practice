import "./base.css";
import { GlobalStyle, Header, H1, A } from "./styles";
import Genres from "./components/Genres";
import AlbumContainer from "./components/AlbumContainer";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <H1>Top Albumz</H1>
        <A href="/">About</A>
      </Header>
      <Genres />
      <AlbumContainer />
    </>
  );
}
