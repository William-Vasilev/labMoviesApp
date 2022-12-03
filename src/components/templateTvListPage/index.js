import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterTVsCard from "../filterTVsCard";
import TVList from "../movieList";
import Grid from "@mui/material/Grid";

function TVListPageTemplate({ TVs, name, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedTVs = TVs
    .filter((T) => {
      return T.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((T) => {
      return genreId > 0 ? T.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header name={name} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterTVsCard
            onUserInput={handleChange}
            nameFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TVList action={action} TVs={displayedTVs}></TVList>
      </Grid>
    </Grid>
  );
}
export default TVListPageTemplate;