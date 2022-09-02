import "./GameButton.scss";
import { useState } from "react";
import ChessBoard from "../ChessBoard/ChessBoard";

const GameButton = (image, title, author, fen) => {
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
          <div className="card__title">Bobby Fischer - 1000th ever game</div>
          <div className="card__author">
            Created on September 1, 2022 by Lorenzo
          </div>
        </div>
      </div>

      {showBoard && (
        <ChessBoard
          className="card__chessboard"
          fen={"8/5k2/3p4/1p1Pp2p/pP2Pp1P/P4P1K/8/8 b - - 99 50"}
        ></ChessBoard>
      )}
    </div>
  );
};

export default GameButton;
