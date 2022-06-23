import React from "react";
import "./movies.scss";

import PropTypes from "prop-types";
import Section from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import MoviesCard from "../../components/MoviesCard/MoviesCard";

const Movies = ({ data, title }) => {
  return (
    <div className="movies">
      <Section title={title} fs={2} />
      <Grid col={5} mdCol={3} smCol={1} gap={30}>
        {data && data.map((item) => <MoviesCard data={item} key={item.id} />)}
      </Grid>
    </div>
  );
};

Movies.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Movies;
