import React from "react";
import "./PokeCell.scss";

const PokeCell = props => {
  const { id, name, url, handleOnClick } = props;
  return (
    <button className="poke-cell" onClick={() => handleOnClick(id, url)}>
      <p className="poke-cell-item">{`Entry: ${id}`}</p>
      <p className="poke-cell-item">{`Name: ${name}`}</p>
    </button>
  );
};

PokeCell.propTypes = {};

export default PokeCell;
