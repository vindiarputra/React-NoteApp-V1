import React from "react";
import { Link } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import { ARCHIVES } from "../utils/routes";

const NoteHeader = () => (
  <header className="note-header">
    <h1>
      <Link to="/">Notes App</Link>
    </h1>
    <nav className="navBar">
      <ul>
        <li>
          <Link to={ARCHIVES}>
            <BiArchiveIn />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NoteHeader;
