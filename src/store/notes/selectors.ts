import { RootState } from '../store';

export const selectNotes = (store: RootState) => store.notes.notes;
