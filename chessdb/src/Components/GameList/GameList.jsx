import "./GameList.scss";
import GameCard from "../GameCard/GameCard";

const GameList = ({ gameList }) => {
  const displayGames = gameList.map((game) => {
    return (
      <GameCard
        title={game.title}
        fen={game.fen}
        gameId={game.gameId}
        //dateCreated={game.dateCreated}
      ></GameCard>
    );
  });

  return <>{displayGames}</>;
};

export default GameList;
