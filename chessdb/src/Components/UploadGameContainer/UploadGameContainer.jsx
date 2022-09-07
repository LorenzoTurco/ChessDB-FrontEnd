import "./UploadGameContainer.scss";
import { useState } from "react";

const UploadGameContainer = () => {
  const [fen, setFen] = useState();
  const [title, setTitle] = useState();

  const uploadFen = async (e) => {
    try {
      const response = await fetch("http://localhost:8080/addGame", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, fen: fen }),
      });
    } catch (e) {
      console.log("something went wrong");
      console.log(e);
    }
  };

  return (
    <div className="upload">
      <form onSubmit={uploadFen}>
        <div>
          <label htmlFor="fen">FEN</label>
          <input
            id="fen"
            type="text"
            onChange={(e) => setFen(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="fen">Title</label>
          <input
            id="fen"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <button className="upload__Button" type="submit">
          Upload game
        </button>
      </form>
    </div>
  );
};

export default UploadGameContainer;
