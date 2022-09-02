import { Chessboard } from "kokopu-react";
import "./ChessBoard.scss";

const ChessBoard = ({ fen }) => {
  return (
    <div className="chessboard">
      <Chessboard className="chessboard" position={fen} />
    </div>
  );
};

export default ChessBoard;
