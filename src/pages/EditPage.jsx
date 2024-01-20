import React, { useState, useEffect } from "react";
import NoteInput from "../components/NoteInput";
import ButtonAction from "../components/NoteActionButton";
import { editNote, getNote } from "../utils/local-data";
import { useNavigate, useParams } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import PropTypes from "prop-types";

function EditPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  const saveNoteHandler = (note) => {
    editNote(note);
    navigate("/");
  };

  const note = getNote(id);

  if (!note) {
    return <p>Note with ID "{id}" not available.</p>;
  }

  return <EditPage onSaveNoteHandler={saveNoteHandler} initialNote={note} />;
}

function EditPage({ onSaveNoteHandler, initialNote }) {
  const [note, setNote] = useState(initialNote);

  const onTitleChangeHandler = (event) => {
    setNote((prevNote) => ({ ...prevNote, title: event.target.value }));
  };

  const onBodyInputHandler = (event) => {
    setNote((prevNote) => ({ ...prevNote, body: event.target.innerHTML }));
  };

  const onClickSaveButton = () => {
    onSaveNoteHandler(note);
  };

  useEffect(() => {
    setNote(initialNote);
  }, [initialNote]);

  return (
    <section className="edit-page">
      <h2>Edit Note</h2>
      <NoteInput state={note} onTitleChange={onTitleChangeHandler} onBodyInput={onBodyInputHandler} initialBodyEdit={initialNote.body} />
      <div className="edit-page-action">
        <ButtonAction title="Save" onClick={onClickSaveButton} icon={<FiCheck />} />
      </div>
    </section>
  );
}

EditPage.propTypes = {
  onSaveNoteHandler: PropTypes.func.isRequired,
  initialNote: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditPageWrapper;

