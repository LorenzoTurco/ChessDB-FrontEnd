import "./GamesContainer.scss";
import { useState, useEffect } from "react";
import GameList from "../GameList/GameList";

const GamesContainer = () => {
  const [gameList, setGameList] = useState([]);

  const getGames = async () => {
    try {
      const response = await fetch("http://localhost:8080/getGames");
      const data = await response.json();
      setGameList(data);
    } catch (e) {
      console.log("something went wrong");
      console.log(e);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <GameList gameList={gameList}></GameList>
    </>
  );
};

export default GamesContainer;
