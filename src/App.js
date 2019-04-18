import React, { Component } from "react";
import "./App.scss";
import PokeList from "./components/PokeList/PokeList";
import PokeDetails from "./components/PokeDetails/PokeDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon_entries: null,
      pokemon_detail: null
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    let POKE_LIST_URI = "https://pokeapi.co/api/v2/pokedex/1";
    fetch(POKE_LIST_URI)
      .then(res => res.json())
      .then(data => {
        let filteredData = data.pokemon_entries.slice(0, 40).map(fdata => {
          return {
            entry_number: fdata.entry_number,
            name: fdata.pokemon_species.name,
            url: fdata.pokemon_species.url
          };
        });

        this.setState({ pokemon_entries: filteredData });
      })
      .catch(err => console.log(err));
  }

  handleOnClick(id, url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const pokemonDetailData = {
          id: data.id,
          name: data.name,
          desc: data.flavor_text_entries[1].flavor_text || null,
          poke_image_url: data.varieties[0].pokemon.url || null,
          base_happiness: data.base_happiness || null,
          capture_rate: data.capture_rate || null,
          habitat: data.habitat.name || null,
          egg_group: data.egg_groups[0].name || null,
          evolves_to_url: data.evolution_chain.url || null,
          evolves_from: data.evolves_from_species
            ? data.evolves_from_species.name
            : null
        };

        this.setState({ pokemon_detail: pokemonDetailData });
      })
      .catch(err => console.log("pokemon_detail Error", err));
  }

  render() {
    const { pokemon_entries, pokemon_detail } = this.state;

    return (
      <div>
        <h1 className="title">National Pokedex</h1>
        {pokemon_entries && (
          <div className="App">
            <PokeList
              handleOnClick={this.handleOnClick}
              pokemonEntries={pokemon_entries}
            />
            {pokemon_detail && <PokeDetails {...pokemon_detail} />}
          </div>
        )}
      </div>
    );
  }
}

export default App;
