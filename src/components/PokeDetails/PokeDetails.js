import React from "react";
import "./PokeDetails.scss";

const PokeDetails = props => {
  const { id, name, desc, base_happiness, capture_rate, evolves_to } = props;

  return (
    <section className="detail-view">
      {/* <img className="poke-image" /> */}
      <div className="data-wrapper">
        <h1 className="data-name">
          ID: {id} {name}
        </h1>
        <p className="data-char">Decription: {desc}</p>
        <p className="data-char">Happiness: {base_happiness}</p>
        <p className="data-char">Capture Rate: {capture_rate}</p>
        <p className="data-char">Evolves To: {evolves_to}</p>
      </div>
    </section>
  );
};

PokeDetails.propTypes = {};

export default PokeDetails;
