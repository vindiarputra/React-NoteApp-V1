import React from "react";
import PropTypes from "prop-types";

const SearchNote = ({ keyword, keywordChange }) => {
  const handleKeywordChange = (event) => {
    keywordChange(event.target.value);
  };

  return (
    <div className="search-container">
      <input type="search" className="search-input" placeholder="Search Note Title.." value={keyword} onChange={handleKeywordChange} />
    </div>
  );
};

SearchNote.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchNote;
