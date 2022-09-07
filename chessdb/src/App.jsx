import "./App.scss";
import Header from "./Components/Header/Header.jsx";
import GamesContainer from "./Components/GamesContainer/GamesContainer.jsx";
import UploadGameContainer from "./Components/UploadGameContainer/UploadGameContainer.jsx";

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <UploadGameContainer />
      <GamesContainer />
    </div>
  );
};

export default App;
