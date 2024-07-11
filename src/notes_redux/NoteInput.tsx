import React, { ChangeEvent } from "react";
interface NoteInputProps {
  addNote(note: string): void;
}
export const NoteInput: React.FC<NoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");
  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };
  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };
  return (
    <div>
      <input
        value={note}
        onChange={updateNote}
        type="text"
        name="note"
        placeholder="note"
      ></input>
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};

export default NoteInput;
