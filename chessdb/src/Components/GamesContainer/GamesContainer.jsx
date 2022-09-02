import "./GamesContainer.scss";
import { useState } from "react";
import GameButton from "../GameButton/GameButton";
import { Chessboard } from "kokopu-react";

const GamesContainer = () => {
  const exampleGame = {
    user: "admin",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
  };

  const [gameList, setGameList] = useState(exampleGame);

  return (
    <>
      <GameButton></GameButton>
      <GameButton></GameButton>
      <GameButton></GameButton>
    </>
  );
};

export default GamesContainer;

//      <Chessboard position={gameList.fen} />
