export const getNotes = state => state.notes;

export const getFaveNotes = state => state.notes.filter(note => note.fave === true);
