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
    <>
      {pressedEditButton ? (
        <>
          <form onSubmit={editGame} className="game__info">
            <input
              className="game__title"
              defaultValue={title}
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <input
              className="game__author"
              defaultValue={fen}
              onChange={(e) => setInputFen(e.target.value)}
            ></input>

            <button type="submit">Save</button>
          </form>
        </>
      ) : (
        <div className="game__info">
          <div className="game__title">{title}</div>
          <div className="game__author">
            Created on September 1, 2022 by Anonymous Fen: {fen}
          </div>
        </div>
      )}
    </>
  );
};

export default GameInfo;
