import { Provider, useDispatch, useSelector } from "react-redux";
import NoteInput from "./NoteInput";
import { NoteState } from "./NoteReducer";
import { NoteStore } from "./NoteStore";
function NoteMain() {
  return (
    <Provider store={NoteStore}>
      <h2>Notes</h2>
      <NoteSecondary />
    </Provider>
  );
}
function NoteSecondary() {
  const notes = useSelector<NoteState, NoteState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();
  const onAddNote = (note: String) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };
  return (
    <>
      <NoteInput addNote={onAddNote}></NoteInput>
      <hr />
      <center>
        <table>
          <ul>
            {notes.map((note) => {
              return <li key={note}>{note}</li>;
            })}
          </ul>
        </table>
      </center>
    </>
  );
}

export default NoteMain;
