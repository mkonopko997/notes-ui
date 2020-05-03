import { NotesAction, REMOVE_NOTE, SET_NOTES } from './types';
import { Note } from '../../types/Note';
import { Dispatch } from 'redux';
import { request } from '../../app/utils';

export const setNotes = (notes: Note[]): NotesAction => {
  return {
    type: SET_NOTES,
    payload: notes,
  };
};

export const removeNote = (id: string): NotesAction => {
  return {
    type: REMOVE_NOTE,
    payload: id,
  };
};

export const getNotes = async (dispatch: Dispatch) => {
  const response = await request('note/all', {
    method: 'GET',
  });

  await dispatch(setNotes(response));
};
