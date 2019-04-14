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
            // imageURL: fdata.webformatURL,
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
        console.log("Poke Details", data);

        // let poke_image = "";
        // if (data.varieties.pokemon.url) {
        //   fetch(data.varieties.pokemon.url)
        //     .then(pres => pres.json())
        //     .then(pdata => {
        //       poke_image = pdata.sprites.front_default;
        //     })
        //     .catch(err => console.log("evolution_chain Error", err));
        // }

        let evolves_to = "";
        if (data.evolution_chain.url) {
          fetch(data.evolution_chain.url)
            .then(eres => eres.json())
            .then(edata => {
              evolves_to = edata.chain.evolves_to[0].species.name;
            })
            .catch(err => console.log("evolution_chain Error", err));
        }

        const pokemonDetailData = {
          id: data.id,
          name: data.name,
          desc: data.flavor_text_entries[1].flavor_text || null,
          // poke_image: poke_image,
          base_happiness: data.base_happiness || null,
          capture_rate: data.capture_rate || null,
          habitat: data.habitat.name || null,
          egg_group: data.egg_groups[0].name || null,
          evolves_to: evolves_to || null,
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
        <h1>National Pokedex</h1>
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
