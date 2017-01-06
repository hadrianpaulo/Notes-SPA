import VueRouter from 'vue-router';
import CreateNote from './components/CreateNote';
import NotesList from './components/NotesList';

const routes = [
  { path: '/create-note/:noteToEdit?', component: CreateNote },
  { path: '/notes-list/:fave?', component: NotesList },
];

export default new VueRouter({
  routes,
});
