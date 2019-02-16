import React, { Component } from "react";
import "./Pokemon.css";
import { isArray } from "util";

class Pokemon extends Component {
  render() {
    const { data, shinySprite } = this.props;

    let imageSrc = shinySprite
      ? `/images/shiny/${data.name
          .replace(/[^\w\s]/gi, "")
          .replace(/ /g, "-")
          .toLowerCase()}.png`
      : `/images/${data.name
          .replace(/[^\w\s]/gi, "")
          .replace(/ /g, "-")
          .toLowerCase()}.png`;

    if (data.dex === 32) {
      imageSrc = shinySprite
        ? "/images/shiny/nidoran-m.png"
        : "/images/nidoran-m.png";
    }

    const pokemonName = data.name.replace("Alola", "");

    return (
      <div className="pokemon">
        <div className="pokemon__details">
          <img className="pokemon__image" src={imageSrc} alt={data.name} />
          <div className="pokemon__details__attr">
            <div className="pokemon__name">{pokemonName}</div>
            <ul className="no-bullet pokemon__types">
              {data.types.map((type, i) => {
                return (
                  <li
                    className={`pokemon__type type type--${type.name.toLowerCase()}`}
                    key={i}
                  >
                    {type.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="pokemon__info">
          <div className="pokemon__info__buddy-distance">
            <div className="pokemon__info__title">Walking Distance</div>
            <div className="pokemon__info__value">
              {data.kmBuddyDistance}
              km
            </div>
          </div>
          <div className="pokemon__info__max-cp">
            <div className="pokemon__info__title">Max CP</div>
            <div className="pokemon__info__value">{data.maxCP}</div>
          </div>
          {data.egg && data.egg !== "Not in Eggs" && isArray(data.egg) ? (
            <div className="pokemon__info__egg-type">
              {data.egg.map(egg => (
                <img
                  className="pokemon__info__egg"
                  src={`/images/eggs/${egg}.png`}
                  alt={`${egg} egg`}
                />
              ))}
            </div>
          ) : (
            data.egg &&
            data.egg !== "Not in Eggs" && (
              <div className="pokemon__info__egg-type">
                <img
                  className="pokemon__info__egg"
                  src={`/images/eggs/${data.egg}.png`}
                  alt={`${data.egg} egg`}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Pokemon;
