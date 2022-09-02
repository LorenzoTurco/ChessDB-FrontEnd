import "./UploadGameContainer.scss";

const UploadGameContainer = () => {
  return (
    <div className="container">
      <button>Upload game</button>

      <label for="fen">FEN</label>
      <input id="fen" type="text"></input>
    </div>
  );
};

export default UploadGameContainer;
