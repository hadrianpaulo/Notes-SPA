<template>
  <div>
  <el-table :data="$route.params.fave === 'true' ?  getFaveNotes : getNotes" style="width: 100%">
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column type="favorite" label="Fave" width="80">
      <template scope="local">
        <div @click="favoriteNote(local.$index)">
          <i v-if="local.row.fave === true" class="el-icon-star-on"></i>
          <i v-else class="el-icon-star-off"></i>
        </div>
      </template>
    </el-table-column>
    <el-table-column property="title" label="Title"></el-table-column>
    <el-table-column type="expand">
      <template scope="local">
        <p>{{ local.row.body }}</p>
        <el-button @click="editNote(local.$index)">Edit</el-button>
        <el-button @click="deleteNote(local.$index)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'NotesList',
    computed: mapGetters([
      'getNotes',
      'getFaveNotes',
    ]),
    methods: {
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      favoriteNote(index) {
        const note = this.$store.state.notes[index];
        this.$store.dispatch('favoriteNote', note);
      },
      deleteNote(index) {
        const note = this.$store.state.notes[index];
        this.$store.dispatch('deleteNote', note);
      },
      editNote(index) {
        const p = `create-note/${index}`;
        this.$router.push({
          path: p,
        });
      },
    },
  };
</script>