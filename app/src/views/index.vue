<template>
  <div class="index">
    <SidePanel />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SidePanel from '../components/SidePanel.vue';
</script>
<style scoped>
.index {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.content {
  flex: 1;
  min-width: 0;
}
</style>