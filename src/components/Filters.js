import React, { Component } from "react";
import Eggs from "./Eggs";
import Region from "./Region";
import Types from "./Types";
import WalkingDistance from "./WalkingDistance";
import "./Filters.css";

class Filters extends Component {
  render() {
    const {
      filterEggs,
      filterRegion,
      filterType,
      filterWalkingDistance,
      getShinies,
      setAlolaPokemon
    } = this.props;

    return (
      <section className="filters">
        <div className="container">
          <Region
            filterRegion={filterRegion}
            setAlolaPokemon={setAlolaPokemon}
          />
          <Types filterType={filterType} />
          <Eggs filterEggs={filterEggs} />
          <WalkingDistance filterWalkingDistance={filterWalkingDistance} />
          <div className="filter">
            <h3 className="filter__h3">Other:</h3>
            <ul className="no-bullet filters__list">
              <li
                className={`filters__list-option other other--shinies`}
                onClick={getShinies}
              >
                Shiny Pokemon
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Filters;
