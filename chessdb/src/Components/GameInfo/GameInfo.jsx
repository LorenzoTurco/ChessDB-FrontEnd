import { useState, useEffect } from "react";
import "./GameInfo.scss";

const GameInfo = ({ title, fen, key, pressedEditButton, updateGameInfo }) => {
  const [inputTitle, setInputTitle] = useState(title);
  const [inputFen, setInputFen] = useState(fen);

  const editGame = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/games/7`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: inputTitle, fen: inputFen }),
      });
    } catch (e) {
      console.log("something went wrong");
      console.log(e);
    }
  };

  return (
    <div className="card__info">
      {pressedEditButton ? (
        <>
          <form onSubmit={editGame}>
            <input
              className="card__title"
              defaultValue={title}
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <input
              className="card__author"
              defaultValue={fen}
              onChange={(e) => setInputFen(e.target.value)}
            ></input>

            <button type="submit">Save</button>
          </form>
        </>
      ) : (
        <div className="card__info">
          <div className="card__title">{title}</div>
          <div className="card__author">
            Created on September 1, 2022 by Anonymous Fen: {fen}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameInfo;
