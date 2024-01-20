import React from "react";
import PropTypes from "prop-types";

const NoteActionButton = ({ title, onClick, icon, className }) => (
  <button className={`action ${className}`} type="button" title={title} onClick={onClick}>
    {icon}
  </button>
);

NoteActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  className: PropTypes.string, 
};

export default NoteActionButton;
