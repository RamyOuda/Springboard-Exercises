import React from "react";
import "./Pokecard.css";

const Pokecard = ({ name, id, type, base_experience }) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <b className="Pokecard-name">{name}</b>
      <img src={imgSrc} alt="Pokemon" className="Pokecard-img" />
      <p className="Pokecard-txt">Type: {type}</p>
      <p className="Pokecard-txt">EXP: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
