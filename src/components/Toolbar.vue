<template>
  <div>
    <el-menu mode="horizontal">
      <router-link to="/create-note">
        <el-menu-item index="1">
          <i class="el-icon-plus"></i> Create Note
        </el-menu-item>
      </router-link>
      <router-link to="/notes-list">
        <el-menu-item index="2"><i class="el-icon-document"></i>Show Notes</el-menu-item>
      </router-link>
      <router-link to="/notes-list/true">
        <el-menu-item index="3"><i class="el-icon-star-on"></i>Show Favorites</el-menu-item>
      </router-link>
    </el-menu>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Toolbar',
  };
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>