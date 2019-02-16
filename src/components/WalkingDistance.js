import React from "react";

const distances = [1, 3, 5, 20];

const WalkingDistance = props => {
  return (
    <div className="filter">
      <h3 className="filter__h3">Walking Distance:</h3>
      <ul className="no-bullet filters__list">
        {distances.map(distance => {
          return (
            <li
              className={`filters__list-option distance distance--${distance}km`}
              key={distance}
              onClick={() => props.filterWalkingDistance(distance)}
            >
              {distance}
              km
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WalkingDistance;
