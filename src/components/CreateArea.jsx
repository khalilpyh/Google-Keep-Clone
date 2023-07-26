import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function CreateArea(props) {
  const [noteToAdd, setNoteToAdd] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;

    setNoteToAdd((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
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
      content: "",
    });

    //prevent form submission from refreshing the page
    event.preventDefault();
  }

  function expandInput() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form onSubmit={submitNote} className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={noteToAdd.title}
            autoComplete="off"
            required
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3: 1}
          onChange={handleChange}
          value={noteToAdd.content}
          autoComplete="off"
          onClick={expandInput}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
