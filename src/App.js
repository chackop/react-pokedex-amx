import React, { Component } from "react";
import "./App.scss";
import PokeList from "./components/PokeList/PokeList";
import PokeDetails from "./components/PokeDetails/PokeDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    let POKE_LIST_URI = 'https://pokeapi.co/api/v2/pokedex/1';
    fetch(POKE_LIST_URI)
    .then(res => res.json())
    .then(data => {
      console.log(data.pokemon_entries);
    })
    .catch(err => console.log(err));
  }

  handleOnClick() {
    console.log("Clicked PokeCell");
  }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <PokeDetails />
      </div>
    );
  }
}

export default App;
