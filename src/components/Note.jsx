export default function Note(props) {
  function deleteClick() {
    props.onDeleteNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteClick}>Delete</button>
    </div>
  );
}
