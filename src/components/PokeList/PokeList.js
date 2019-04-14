import React from "react";
import "./PokeList.scss";
import PokeCell from "../PokeCell/PokeCell";

const PokeList = props => {
  const { pokemonEntries, handleOnClick } = props;

  const pokeCells = pokemonEntries.map(pokeEntry => {
    return (
      <PokeCell
        key={pokeEntry.entry_number}
        id={pokeEntry.entry_number}
        name={pokeEntry.name}
        url={pokeEntry.url}
        handleOnClick={handleOnClick}
      />
    );
  });

  return <section className="poke-list">{pokeCells}</section>;
};

PokeList.propTypes = {};

export default PokeList;
