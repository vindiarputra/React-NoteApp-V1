import React, { useState } from "react";
import PropTypes from "prop-types";
import NoteList from "../components/NoteList";
import SearchNote from "../components/SearchNote";
import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";

function ArsipPage({ notes, defaultKeyword, keyword, keywordChange, onKeywordChange }) {
  const filteredNotes = notes.filter(({ title }) => title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <section className="ArsipPage">
      <h2>Catatan Arsip</h2>
      <SearchNote keyword={keyword} keywordChange={keywordChange} />
      <NoteList notes={filteredNotes} />
    </section>
  );
}

ArsipPage.propTypes = {
  notes: PropTypes.array.isRequired,
  defaultKeyword: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};

function PageArchiveWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(defaultKeyword);

  const changeSearchParams = (newKeyword) => {
    setSearchParams({ keyword: newKeyword });
  };

  return <ArsipPage notes={getArchivedNotes()} defaultKeyword={defaultKeyword} keyword={keyword} keywordChange={setKeyword} onKeywordChange={changeSearchParams} />;
}

export default PageArchiveWrapper;
