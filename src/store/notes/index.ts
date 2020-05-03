import { NotesAction, REMOVE_NOTE, SET_NOTES } from './types';
import { Note } from '../../types/Note';

export type NotesStore = {
  readonly notes?: Note[];
};

const initial: NotesStore = {
  notes: [],
};

export default (state = initial, action: NotesAction) => {
  if (action.type === SET_NOTES) {
    return {
      ...state,
      notes: action.payload,
    };
  }
  if (action.type === REMOVE_NOTE) {
    return {
      ...state,
      notes: state.notes && state.notes.filter(el => el.id !== action.payload),
    };
  }
  return state;
};
