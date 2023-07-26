import { useState } from "react";

export default function CreateArea(props) {
  const [noteToAdd, setNoteToAdd] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { value, name } = event.target;

    setNoteToAdd((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    //retrieve user input notes
  }

  function submitNote(event) {
    //pass the note back to App
    props.onAddNote(noteToAdd);

    //reset input fields
    setNoteToAdd({
      title: "",
      content: ""
    });

    //prevent form submission from refreshing the page
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={noteToAdd.title}
          autoComplete="off"
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={noteToAdd.content}
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
