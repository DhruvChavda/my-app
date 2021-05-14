import React from "react";
import Card from "../card/card";
import "./card-list.css";

export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.champions.map((champion, ind) => (
                <Card key={ind} champion={champion} />
            ))}
        </div>
    );
};

export default CardList;
