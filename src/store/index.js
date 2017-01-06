import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as types from './mutation-types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  notes: [{
    title: 'Life in the Philippines',
    fave: true,
    body: '...',
  },
  ],
};

const getIndexByProp = (arr, prop, targetObj) =>
arr.map(item => item[prop]).indexOf(targetObj[prop]);

const mutations = {
  [types.CREATE_NOTE](context, note) {
    context.notes.push(note);
  },
  /* eslint no-param-reassign: ["error", { "props": false }] */
  [types.FAVE_NOTE](context, noteToFave) {
    const indexToFave = getIndexByProp(context.notes, 'title', noteToFave);
    noteToFave.fave = !noteToFave.fave;
    context.notes.splice(indexToFave, 1, noteToFave);
  },

  [types.DELETE_NOTE](context, noteToDelete) {
    const indexToDel = getIndexByProp(context.notes, 'title', noteToDelete);
    context.notes.splice(indexToDel, 1);
  },
  [types.EDIT_NOTE](context, payload) {
    context.notes.splice(payload.noteToEdit, 1, payload.newNote);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
});
