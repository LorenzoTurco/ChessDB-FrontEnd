import "./App.css";
import Header from "./Components/Header/Header.jsx";
import GamesContainer from "./Components/GamesContainer/GamesContainer.jsx";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <GamesContainer />
    </div>
  );
};

export default App;
