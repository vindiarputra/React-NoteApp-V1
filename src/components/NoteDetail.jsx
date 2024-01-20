import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";

function NoteDetail({ title, body, createdAt }) {
  const parsedBody = typeof body === "string" ? parser(body) : null;

  return (
    <article className="noteDetail">
      <h3 className="noteDetail-title">{title}</h3>
      <p className="noteDetail-Created-at">{showFormattedDate(createdAt)}</p>
      {parsedBody && <div className="noteDetail-body">{parsedBody}</div>}
    </article>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
