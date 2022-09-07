import "./DeleteButton.scss";

const DeleteButton = ({ gameId }) => {
  const deleteGame = async (e) => {
    try {
      const response = await fetch(
        `http://localhost:8080/deleteGame/${gameId}`,
        {
          method: "DELETE",
        }
      );
    } catch (e) {
      console.log("something went wrong");
      console.log(e);
    }
  };

  return (
    <div className="delete">
      <form className="delete__form" onSubmit={deleteGame}>
        <button className="delete-button" type="submit">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteButton;
