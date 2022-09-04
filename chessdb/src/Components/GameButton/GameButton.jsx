import "./GameButton.scss";
import { useState } from "react";
import ChessBoard from "../ChessBoard/ChessBoard";

const GameButton = ({ title, fen }) => {
  console.log(fen);
  const [showBoard, setShowBoard] = useState(false);

  const loadChessBoard = () => {
    setShowBoard(!showBoard);
  };

  return (
    <div>
      <div className="card" onClick={loadChessBoard}>
        <div>
          <img
            className="card__picture"
            src="https://images.chesscomfiles.com/uploads/v1/library_collection/b692f1e4-81da-11eb-ab75-f95b01a024a6.543dbc39.80x80o.a4283866b809.jpeg"
          ></img>
        </div>

        <div className="card__info">
          <div className="card__title">{title}</div>
          <div className="card__author">
            Created on September 1, 2022 by Anonymous Fen: {fen}
          </div>
        </div>
      </div>

      {showBoard && (
        <ChessBoard className="card__chessboard" fen={fen}></ChessBoard>
      )}
    </div>
  );
};

export default GameButton;
