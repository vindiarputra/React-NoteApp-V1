import React, { useState } from 'react';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';
import ButtonAction from '../components/NoteActionButton';
import { getActiveNotes } from '../utils/local-data';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';
import {NEW_NOTE} from '../utils/routes'

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const navigate = useNavigate();
  const addButtonHandler = () => {
    navigate(NEW_NOTE);
  };

  return (
    <HomePage
      defaultKeyword={keyword}
      keywordChange={(newKeyword) => setSearchParams({ keyword: newKeyword })}
      onAddButtonHandler={addButtonHandler}
    />
  );
}

function HomePage({ defaultKeyword, keywordChange, onAddButtonHandler }) {
  const [notes] = useState(getActiveNotes());
  const [keyword, setKeyword] = useState(defaultKeyword || '');

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    keywordChange(newKeyword);
  };

  const filteredNotes = notes.filter(({ title }) => title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <section className='homepage'>
      <h2>Catatan Aktif</h2>
      <SearchNote keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} />
      <div className='homepage-action'>
        <ButtonAction title='Tambah' onClick={onAddButtonHandler} icon={<FiPlus />} />
      </div>
    </section>
  );
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
  onAddButtonHandler: PropTypes.func.isRequired,
};

export default HomePageWrapper;
