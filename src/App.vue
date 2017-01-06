<template>
  <div id="app">
    <Toolbar></Toolbar>
  </div>
</template>

<script>
  import Toolbar from './components/Toolbar';
  import CreateNote from './components/CreateNote';
  import NotesList from './components/NotesList';

  export default {
    name: 'app',
    components: {
      Toolbar,
      CreateNote,
      NotesList,
    },
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>