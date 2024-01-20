import React, { useState } from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

const NoteInput = (props) => {
  const [noteState, setNoteState] = useState(props.state);

  const handleTitleChange = (event) => {
    setNoteState({ ...noteState, title: event.target.value });
    props.onTitleChange(event);
  };

  const handleBodyInput = (event) => {
    props.onBodyInput(event);
  };

  return (
    <section className='noteSection'>
      <header className='noteHeader'>
        <input
          className='noteTitle'
          placeholder='Note Title'
          value={noteState.title}
          onChange={handleTitleChange}
          spellCheck='false'
        />
      </header>
      <article
        className='noteBody'
        contentEditable='true'
        data-placeholder='Write Note'
        onInput={handleBodyInput}
        spellCheck='false'
        suppressContentEditableWarning={true}
      >
        {props.initialBodyEdit !== undefined ? parser(props.initialBodyEdit) : ''}
      </article>
    </section>
  );
};

NoteInput.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyInput: PropTypes.func.isRequired,
  initialBodyEdit: PropTypes.string
};

export default NoteInput;
