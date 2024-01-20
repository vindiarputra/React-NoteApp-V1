// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NoteHeader from "./components/NoteHeader";
import HomePageWrapper from "./pages/HomePage";
import PageArchiveWrapper from "./pages/PageArchive";
import NewPage from "./pages/NewNote";
import DetailPageWrapper from "./pages/DetailPage";
import EditPageWrapper from "./pages/EditPage";
import PageNotFound from "./pages/PageNotFound";
import { HOME, ARCHIVES, NEW_NOTE, EDIT_NOTE, NOTE_DETAIL, PAGE_NOT_FOUND } from "./utils/routes";

function App() {
  const handleSaveNote = (note) => {
    editNote(note);
    navigate("/");
  };

  return (
    <div className="app-container">
      <header>
        <NoteHeader />
      </header>
      <main>
        <Routes>
          <Route path={HOME} element={<HomePageWrapper />} />
          <Route path={ARCHIVES} element={<PageArchiveWrapper />} />
          <Route path={NEW_NOTE} element={<NewPage />} />
          <Route path={EDIT_NOTE} element={<EditPageWrapper onSaveNoteHandler={handleSaveNote} />} />
          <Route path={NOTE_DETAIL} element={<DetailPageWrapper />} />
          <Route path={PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
