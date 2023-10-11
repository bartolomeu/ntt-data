import { Grid, RatingIndicator, Text, Title } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import React from "react";

function MovieDetail({data}) {
  const rating = parseFloat(data.imdbRating)/2;
  return (
    <Grid>
      <div data-layout-span="XL8 L8 M8 S12">
        <Title style={spacing.sapUiLargeMarginBottom}>
          <strong>{data.Title}</strong>
        </Title>
        <Text style={spacing.sapUiTinyMarginBottom}>
          {data.Plot}
        </Text>
        <br />
        <Text>
          <strong>Actors: </strong> {data.Actors}
        </Text>
        <br />
        <Text>
          <strong>Review: </strong>
          <RatingIndicator value={rating} readonly />{" "}
        </Text>
      </div>
      <div data-layout-span="XL4 L4 M4 S12">
        <img src={data.Poster} alt={`Poster de '${data.Title}'`} />
        
      </div>
    </Grid>
  );
}

export default MovieDetail;
