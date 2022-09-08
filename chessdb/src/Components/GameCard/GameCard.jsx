import "./GameCard.scss";
import { useState, useEffect } from "react";
import ChessBoard from "../ChessBoard/ChessBoard";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import GameInfo from "../GameInfo/GameInfo";

const GameCard = ({ title, fen, gameId }) => {
  const [showBoard, setShowBoard] = useState(false);
  const [pressedEditButton, setPressedEditButton] = useState(false);
  const [gameInfo, setGameInfo] = useState({});

  const editFields = (e) => {
    e.preventDefault();

    setPressedEditButton(!pressedEditButton);
  };

  const updateGameInfo = (newGameInfo) => {
    setGameInfo(newGameInfo);
  };

  const loadChessBoard = () => {
    if (pressedEditButton) return;
    setShowBoard(!showBoard);
  };

  return (
    <div>
      <div className="card">
        <div className="card__info" onClick={loadChessBoard}>
          <img
            className="card__picture"
            src="https://images.chesscomfiles.com/uploads/v1/library_collection/b692f1e4-81da-11eb-ab75-f95b01a024a6.543dbc39.80x80o.a4283866b809.jpeg"
          ></img>

          <GameInfo
            title={title}
            fen={fen}
            key={gameId}
            gameId={gameId}
            pressedEditButton={pressedEditButton}
            updateGameInfo={updateGameInfo}
          />
        </div>

        <div className="card__buttons">
          <DeleteButton key={gameId} gameId={gameId}></DeleteButton>
          <EditButton
            key={gameId}
            pressedEditButton={pressedEditButton}
            editFields={editFields}
            gameInfo={gameInfo}
          ></EditButton>
        </div>
      </div>

      {showBoard && (
        <ChessBoard className="card__chessboard" fen={fen}></ChessBoard>
      )}
    </div>
  );
};

export default GameCard;
