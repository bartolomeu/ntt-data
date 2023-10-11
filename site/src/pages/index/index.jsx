import { BusyIndicator, FlexBox, FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent, Icon, ObjectStatus, Title } from "@ui5/webcomponents-react";
import React, { useState } from "react";
import MovieDetail from "./movieDetail";
import SearchBar from "./searchBar";
import { getMovie } from "../../service/movieApi";
import { spacing } from "@ui5/webcomponents-react-base";

function Index() {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false)

  const searchMovie = async (term) => {
    setLoading(true);
    const req = await getMovie(term);
    const data = await req.json();
    setLoading(false);
    setMovieData(data);
  };

  return (
    <div className="container">
      <Title className="centerText strong">
        <strong>Título muito bacana do Bart !!</strong>
      </Title>
      <p className="centerText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        reiciendis itaque eligendi id, fugit ipsa unde minus eos. Sapiente,
        commodi.
      </p>

      <SearchBar callBack={searchMovie} />

      {loading && <BusyIndicator active={loading} />}

      {movieData && !(movieData?.error) && <MovieDetail data={movieData} />}

      {movieData?.error && (
        <FlexBox direction={FlexBoxDirection.Column} justifyContent={FlexBoxJustifyContent.Center} alignItems={FlexBoxAlignItems.Center}>
        <ObjectStatus
          active={false}
          inverted
          state="Error"
          icon={<Icon name="error" />}
          style={spacing.sapUiLargePaddingBeginEnd}
        >
          Não foi possivel encontrar o filme
          <br />
          Por favor tente novamente mais tarde
          <br />
          Mensagem de erro do servidor: {movieData.message}
        </ObjectStatus>
        </FlexBox>
      )}

    </div>
  );
}

export default Index;
