import React from "react";
import "./PokeCell.scss";

const PokeCell = props => {
  const { id, name, url, handleOnClick } = props;
  return (
    <button className="poke-cell" onClick={() => handleOnClick(id, url)}>
      <span className="poke-cell-item">{`Index: ${id}`}</span>
      <span className="poke-cell-item">{`Name: ${name}`}</span>
    </button>
  );
};

PokeCell.propTypes = {};

export default PokeCell;
