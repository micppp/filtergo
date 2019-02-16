import React from "react";

const eggs = ["2km", "5km", "7km", "10km"];

const Eggs = props => {
  return (
    <div className="filter">
      <h3 className="filter__h3">Eggs:</h3>
      <ul className="no-bullet filters__list">
        {eggs.map((egg, i) => {
          return (
            <li
              className={`filters__list-option egg egg--${egg}`}
              key={i}
              onClick={() => props.filterEggs(egg)}
            >
              {egg}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Eggs;
