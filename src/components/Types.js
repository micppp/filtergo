import React from "react";

const typesArray = [
  "Normal",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dark",
  "Dragon",
  "Steel",
  "Fairy"
];

const Types = props => {
  return (
    <div className="filter">
      <h3 className="filter__h3">Type:</h3>
      <ul className="no-bullet filters__list">
        {typesArray.map(type => {
          return (
            <li
              className={`filters__list-option type type--${type.toLowerCase()}`}
              key={type}
              onClick={() => props.filterType(type)}
            >
              {type}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Types;
