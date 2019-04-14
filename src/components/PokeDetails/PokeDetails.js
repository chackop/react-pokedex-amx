import React from "react";
import "./PokeDetails.scss";

const PokeDetails = props => {
  const {
    id,
    name,
    desc,
    // poke_image,
    base_happiness,
    capture_rate,
    habitat,
    egg_group,
    evolves_from,
    evolves_to
  } = props;

  return (
    <section className="detail-view">
      {/* <img src={poke_image} className="poke-image" alt="pokemonimage" /> */}
      <div className="data-wrapper">
        <h1 className="data-name">
          ID: {id} {name}
        </h1>
        <p className="data-char">Habitat: {habitat}</p>
        <p className="data-char">Egg Group: {egg_group}</p>
        <p className="data-char">Happiness: {base_happiness}</p>
        <p className="data-char">Capture Rate: {capture_rate}</p>
        {evolves_from && (
          <p className="data-char">Evolved from: {evolves_from}</p>
        )}
        {evolves_to && <p className="data-char">Evolves To: {evolves_to}</p>}
        <p className="data-char">Decription: {desc}</p>
      </div>
    </section>
  );
};

PokeDetails.propTypes = {};

export default PokeDetails;
