<template>
    <el-form>
      <el-form-item label="Title">
        <el-input placeholder="Enter Title.." v-model="note.title"></el-input>
      </el-form-item>
      <el-form-item label="Body">
        <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" placeholder="What's on your mind?" v-model="note.body"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="$route.params.noteToEdit" @click="editNote()" :span="6">Edit</el-button>
        <el-button v-else @click="createNote()" :span="6">Save</el-button>
        <el-button @click="onCancel()" :span="6">Cancel</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
  export default {
    name: 'CreateNote',
    data() {
      const noteToEdit = this.$route.params.noteToEdit;
      if (noteToEdit === undefined) {
        return {
          note: {
            title: '',
            body: '',
          },
        };
      }
      return {
        // this is how objects are deep-copied in JS..
        note: Object.assign({}, this.$store.state.notes[noteToEdit]),
      };
    },
    methods: {
      createNote() {
        this.$store.dispatch('createNote', this.$data.note);
        this.$router.push('notes-list');
      },
      editNote() {
        this.$store.dispatch('editNote', { noteToEdit: this.$route.params.noteToEdit, newNote: this.$data.note });
        // Weirdly, vue-router sometimes acts like a stack when there's an optional argument
        // so i can't use $router.push('notes-list').
        // This results to /#/create-notes/notes-list
        this.$router.go(-1);
      },
      onCancel() {
        Object.assign(this.$data, this.$options.data());
      },
    },
  };
</script>