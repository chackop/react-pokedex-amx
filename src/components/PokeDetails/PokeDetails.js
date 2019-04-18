import React, { PureComponent } from "react";
import "./PokeDetails.scss";

export default class PokeDetails extends PureComponent {
  constructor() {
    super();
    this.state = {
      poke_image: null
    };
  }

  componentWillReceiveProps(nextProps) {
    const { id, poke_image_url } = this.props;
    if (nextProps.id !== id) {
      fetch(poke_image_url)
        .then(res => res.json())
        .then(data => {
          this.setState({ poke_image: data.sprites.front_default });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const {
      id,
      name,
      desc,
      // poke_image_url,
      base_happiness,
      capture_rate,
      habitat,
      egg_group,
      evolves_from
      // evolves_to_url
    } = this.props;

    return (
      <section className="detail-view">
        <div className="data-wrapper">
          <div className="title-contain">
            <h5 className="data-name">
              ID: {id} {name}
            </h5>
            {this.state.poke_image && (
              <img
                src={this.state.poke_image}
                className="poke-image"
                alt="pokemonimage"
              />
            )}
          </div>
          <p className="data-char">Habitat: {habitat}</p>
          <p className="data-char">Egg Group: {egg_group}</p>
          <p className="data-char">Happiness: {base_happiness}</p>
          <p className="data-char">Capture Rate: {capture_rate}</p>
          {evolves_from && (
            <p className="data-char">Evolved from: {evolves_from}</p>
          )}
          {/* {evolves_to && <p className="data-char">Evolves To: {evolves_to}</p>} */}
          <p className="data-char">Decription: {desc}</p>
        </div>
      </section>
    );
  }
}
