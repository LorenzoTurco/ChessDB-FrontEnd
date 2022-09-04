import "./GameList.scss";
import { useState } from "react";
import GameButton from "../GameButton/GameButton";

const GameList = ({ gameList }) => {
  console.log(gameList);

  const displayGames = gameList.map((game) => {
    console.log(game);
    return (
      <GameButton
        title={game.title}
        fen={game.fen}
        //dateCreated={game.dateCreated}
      ></GameButton>
    );
  });

  return <>{displayGames}</>;
};

export default GameList;
