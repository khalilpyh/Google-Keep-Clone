import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteToAdd) {
    //add the passed note to the notes array
    setNotes((prevValue) => {
      return [...prevValue, noteToAdd];
    });
  }

  function deleteNote(noteId) {
    //remove the note with passed id from notes array
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => index !== noteId);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAddNote={addNote} />
      {/* display all notes */}
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDeleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
