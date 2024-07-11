import { NoteAction } from "./NoteAction";
export interface NoteState {
  notes: string[];
}
const initialState = {
  notes: [],
};
export const NoteReducer = (
  state: NoteState = initialState,
  action: NoteAction
) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    default:
      return state;
  }
};
