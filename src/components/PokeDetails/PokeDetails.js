import React from "react";
import "./PokeDetails.scss";

const PokeDetails = () => {
  return (
    <section className="detail-view">
      {/* <img className="poke-image" /> */}
      <div className="data-wrapper">
        <h1 className="data-name" />
        <p className="data-char" />
      </div>
    </section>
  );
};

PokeDetails.propTypes = {};

export default PokeDetails;
