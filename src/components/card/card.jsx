import React from "react";
import "./card.css";

const Card = ({ champion }) => {
    return (
        <div className="card-container">
            <img src={`https://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${champion.image.full}`} alt="champion" />
            <h1>{champion.name}</h1>
            <h3>{champion.title}</h3>
        </div>
    );
};

export default Card;
