import React from "react";

const regions = ["kanto", "johto", "hoenn", "sinnoh", "alola"];

const Region = props => {
  return (
    <div className="filter">
      <h3 className="filter__h3">Region:</h3>
      <ul className="no-bullet filters__list">
        {regions.map((region, i) => {
          return (
            <li
              className={`filters__list-option region region--${region}`}
              key={i}
              onClick={() => props.filterRegion(region)}
            >
              {region} Region
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Region;
