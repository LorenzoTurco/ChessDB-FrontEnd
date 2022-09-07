import "./EditButton.scss";
import { useState } from "react";

const EditButton = ({ gameId, editFields, pressedEditButton, gameInfo }) => {
  return (
    <>
      <div className="edit">
        <form className="edit__form" onSubmit={editFields}>
          <button className="edit-button" type="submit" text="AAAA">
            {pressedEditButton ? "Cancel" : "Edit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default EditButton;
