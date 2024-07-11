export type NoteAction = { type: "ADD_NOTE"; payload: string };
export const addNote = (note: string): NoteAction => ({
  type: "ADD_NOTE",
  payload: note,
});
