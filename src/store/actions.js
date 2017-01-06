import * as types from './mutation-types';

export const createNote = ({ commit }, note) => {
  commit(types.CREATE_NOTE, note);
};

export const favoriteNote = ({ commit }, note) => {
  commit(types.FAVE_NOTE, note);
};

export const deleteNote = ({ commit }, note) => {
  commit(types.DELETE_NOTE, note);
};

export const editNote = ({ commit }, payload) => {
  commit(types.EDIT_NOTE, payload);
};
