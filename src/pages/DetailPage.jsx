import React, { useState, useEffect } from "react";
import NoteDetail from "../components/NoteDetail";
import { FaRegEdit } from "react-icons/fa";
import ButtonAction from "../components/NoteActionButton";
import { useNavigate, useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import PageNotFound from "./PageNotFound";
import PropTypes from "prop-types";
import { EDIT_NOTE } from "../utils/routes";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function editButtonHandler() {
    navigate(EDIT_NOTE.replace(':id', id));
  }

  return <DetailPage id={id} onEditButtonHandler={editButtonHandler} />;
}

function DetailPage({ id, onEditButtonHandler }) {
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const noteData = await getNote(id);
        setNote(noteData);
      } catch (error) {
        console.error("Error fetching note:", error);
        setNote(undefined);
      }
    };

    fetchNote();
  }, [id]);

  if (note === undefined) {
    return <PageNotFound />;
  }

  return (
    <section>
      {note !== null && (
        <>
          <NoteDetail {...note} />
          <div className="editNote-action">
            <ButtonAction title="Edit" onClick={onEditButtonHandler} icon={<FaRegEdit />} />
          </div>
        </>
      )}
    </section>
  );
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onEditButtonHandler: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
