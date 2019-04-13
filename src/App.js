import React, { Component } from "react";
import "./App.scss";
import PokeList from "./components/PokeList/PokeList";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PokeList />
      </div>
    );
  }
}

export default App;
