import React from "react";
import "./PokeCell.scss";

const PokeCell = ({ handleOnClick }) => {
  return <button className="poke-cell" onClick={() => handleOnClick()} />;
};

PokeCell.propTypes = {};

export default PokeCell;
