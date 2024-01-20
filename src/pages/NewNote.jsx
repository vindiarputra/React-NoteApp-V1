import React, { useState } from 'react';
import NoteInput from '../components/NoteInput';
import ButtonAction from '../components/NoteActionButton';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

function NewPageWrapper() {
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', body: '' });

  function saveNoteHandler() {
    addNote(note);
    navigate('/');
  }

  return (
    <section className='add-new-note'>
      <h2>Catatan Baru</h2>
      <NoteInput
        state={note}
        onTitleChange={(e) => setNote({ ...note, title: e.target.value })}
        onBodyInput={(e) => setNote({ ...note, body: e.target.innerHTML })}
      />
      <div className='add-new-note-action'>
        <ButtonAction title='Simpan' onClick={saveNoteHandler} icon={<FiCheck />} />
      </div>
    </section>
  );
}

export default NewPageWrapper;
