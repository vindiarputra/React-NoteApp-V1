import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { showFormattedDate } from "./../utils/index";
import { Link } from "react-router-dom";
import ButtonAction from "./NoteActionButton";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import { FiTrash2 } from "react-icons/fi";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { ARCHIVES, EDIT_NOTE , NOTE_DETAIL} from "../utils/routes";

function NoteItem({ id, title, body, createdAt, archived, setNoteList }) {
  const [isArchived, setIsArchived] = useState(archived);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsArchived(archived);
  }, [archived]);

  function deleteNoteHandler() {
    deleteNote(id);
    setNoteList((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function archiveNoteHandler() {
    archiveNote(id);
    setIsArchived(true);
    navigate(ARCHIVES);
  }

  function unarchiveNoteHandler() {
    unarchiveNote(id);
    setIsArchived(false);
    navigate("/");
  }

  function editButtonHandler() {
    navigate(EDIT_NOTE.replace(':id', id));
  }

  return (
    <article className="noteItem">
      <h3 className="noteItem-title">
        <Link to={NOTE_DETAIL.replace(':id', id)}>{title}</Link>
      </h3>
      <p className="noteItem-createdAt">{showFormattedDate(createdAt)}</p>
      <p className="noteItem-body">{parser(body)}</p>
      <div className="noteItem-action">
        <ButtonAction title="Edit" onClick={editButtonHandler} icon={<FaRegEdit />} />
        {location.pathname === ARCHIVES ? <ButtonAction title="Unarchive" onClick={unarchiveNoteHandler} icon={<BiArchiveOut />} /> : <ButtonAction title="Archive" onClick={archiveNoteHandler} icon={<BiArchiveIn />} />}
        <ButtonAction title="Delete" onClick={deleteNoteHandler} icon={<FiTrash2 />} />
      </div>
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  setNoteList: PropTypes.func.isRequired,
};

export default NoteItem;
