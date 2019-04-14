import React, { Component } from "react";
import "./App.scss";
import PokeList from "./components/PokeList/PokeList";
import PokeDetails from "./components/PokeDetails/PokeDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon_entries: null
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    let POKE_LIST_URI = "https://pokeapi.co/api/v2/pokedex/1";
    fetch(POKE_LIST_URI)
      .then(res => res.json())
      .then(data => {
        let filteredData = data.pokemon_entries.slice(10, 90).map(fdata => {
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

  handleOnClick() {
    console.log("Clicked PokeCell");
  }

  render() {
    const { pokemon_entries } = this.state;

    return (
      <div>
        {pokemon_entries && (
          <div className="App">
            <PokeList
              handleOnClick={this.handleOnClick}
              pokemonEntries={pokemon_entries}
            />
            <PokeDetails />
          </div>
        )}
      </div>
    );
  }
}

export default App;
