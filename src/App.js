import React, { Component, Fragment } from "react";
import allPokemonJSON from "pokemongo-json-pokedex/output/pokemon.json";
import shinyPokemon from "./data/shiny";
import eggs from "./data/eggs";
import Header from "./layout/Header";
import Filters from "./components/Filters";
import Pokemon from "./components/Pokemon";
import "./App.css";

class App extends Component {
  state = {
    allPokemon: allPokemonJSON,
    alolaPokemon: [],
    filteredPokemon: [],
    open: false,
    shinySprite: false
  };

  getAlolaPokemon = () => {
    const { allPokemon } = this.state;
    const alolaPokemon = allPokemon.filter(pokemon =>
      pokemon.name.includes("Alola")
    );

    this.setState({
      alolaPokemon,
      shinySprite: false
    });
  };

  getShinies = () => {
    const { allPokemon } = this.state;
    const shiny = shinyPokemon;
    const filteredPokemon = allPokemon.filter(pokemon =>
      shiny.includes(pokemon.name)
    );
    this.setState({
      filteredPokemon,
      shinySprite: true
    });
  };

  filterRegion = region => {
    const { allPokemon, alolaPokemon } = this.state;
    let filteredPokemon = [];
    switch (region) {
      case "kanto":
        filteredPokemon = allPokemon.filter(pokemon => pokemon.dex <= 151);
        this.setState({
          filteredPokemon,
          shinySprite: false
        });
        break;
      case "johto":
        filteredPokemon = allPokemon.filter(
          pokemon => pokemon.dex >= 152 && pokemon.dex <= 251
        );
        this.setState({
          filteredPokemon,
          shinySprite: false
        });
        break;
      case "hoenn":
        filteredPokemon = allPokemon.filter(
          pokemon => pokemon.dex >= 252 && pokemon.dex <= 386
        );
        this.setState({
          filteredPokemon,
          shinySprite: false
        });
        break;
      case "sinnoh":
        filteredPokemon = allPokemon.filter(
          pokemon => pokemon.dex >= 387 && pokemon.dex <= 493
        );
        this.setState({
          filteredPokemon,
          shinySprite: false
        });
        break;
      case "alola":
        this.setState({
          filteredPokemon: alolaPokemon,
          shinySprite: false
        });
        break;
      default:
    }
  };

  filterType = type => {
    const { allPokemon } = this.state;
    let filteredPokemon = [];

    allPokemon.forEach(pokemon => {
      pokemon.types.forEach(t => {
        if (t.name === type) {
          filteredPokemon.push(pokemon);
        }
      });
    });

    this.setState({
      filteredPokemon,
      shinySprite: false
    });
  };

  filterWalkingDistance = distance => {
    const { allPokemon } = this.state;

    const filteredPokemon = allPokemon.filter(
      pokemon => pokemon.kmBuddyDistance === distance
    );

    this.setState({
      filteredPokemon,
      shinySprite: false
    });
  };

  filterEggs = egg => {
    const { allPokemon } = this.state;
    const filteredPokemon = allPokemon.filter(
      pokemon => pokemon.egg && pokemon.egg.includes(egg)
    );
    this.setState({
      filteredPokemon,
      shinySprite: false
    });
  };

  clearFilters = () =>
    this.setState({
      filteredPokemon: [],
      shinySprite: false
    });

  setEggs = () => {
    const { allPokemon } = this.state;

    allPokemon.forEach(pokemon => {
      const egg = eggs.filter(egg => egg.name === pokemon.name);
      if (egg.length > 0) {
        pokemon.egg = egg[0].inEggs;
      }
    });
  };

  handleMenuClick = () => this.setState({ open: !this.state.open });

  componentDidMount = () => {
    this.getAlolaPokemon();
    this.setEggs();
  };

  render() {
    const { allPokemon, filteredPokemon, open, shinySprite } = this.state;
    const data = filteredPokemon.length > 0 ? filteredPokemon : allPokemon;

    return (
      <Fragment>
        <Header open={open} handleMenuClick={this.handleMenuClick} />
        <Filters
          open={open}
          filterEggs={this.filterEggs}
          filterRegion={this.filterRegion}
          filterType={this.filterType}
          filterWalkingDistance={this.filterWalkingDistance}
          getShinies={this.getShinies}
          setAlolaPokemon={this.setAlolaPokemon}
          resetPokemon={this.resetPokemon}
        />
        <div className="container">
          <div className="pokemon-grid">
            {data.map((pokemon, i) => {
              return (
                <Pokemon data={pokemon} key={i} shinySprite={shinySprite} />
              );
            })}
          </div>
        </div>
        {filteredPokemon.length > 0 ? (
          <div className="clear-filters" onClick={this.clearFilters}>
            Clear Filters
          </div>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default App;
