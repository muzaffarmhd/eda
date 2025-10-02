<template>
  <div class="side-panel">
    <el-menu
      default-active="5"
      class="el-menu-vertical-demo"
      size="small"
      @select="handleSelect"
      >
      <div class="side-panel__logo">
        <img :src="logoUrl" alt="logo" />
      </div>
      <el-sub-menu index="note">
        <template #title>
          <el-icon><Document /></el-icon>
          <span>Notes</span>
        </template>
        <el-menu-item
          v-for="md in markdownFiles"
          :key="md.name"
          :index="`note?file=${md.name}`"
        >{{ md.name }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="visualize">
        <el-icon><DataAnalysis /></el-icon>
        <span>Visualize</span>
      </el-menu-item>
      <el-sub-menu index="lore">
        <template #title>
          <el-icon><Collection /></el-icon>
          <span>Lore</span>
        </template>
        <el-menu-item
          v-for="md in loreFiles"
          :key="md.name"
          :index="`lore?file=${md.name}`"
        >{{ md.name }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="info">
        <el-icon><InfoFilled /></el-icon>
        <span>Info</span>
      </el-menu-item>
      <el-menu-item index="settings">
        <el-icon><Tools /></el-icon>
        <span>Settings</span>
      </el-menu-item>
    </el-menu>
    <div class="side-panel__footer">
      <el-button text size="large" @click="toggleTheme" class="theme-toggle-btn">
        <el-icon size="large" v-if="isDark"><Sunny /></el-icon>
        <el-icon size="large" v-else><Moon /></el-icon>
        <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { Document, DataAnalysis, Collection, Sunny, Moon, InfoFilled, Tools } from '@element-plus/icons-vue'
import logoUrl from '../assets/images/main.png'
import router from '../router/router'
import { noteService } from '@/database/services/NoteService'
import { loreService } from '@/database/services/LoreService'

const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
}
watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
})
const handleSelect = (index: string) => {
  router.push(`/${index}`) 
}

const markdownFiles = ref<{ name: string; path: string }[]>([])
const loreFiles = ref<{ name: string; path: string }[]>([])
onMounted(async () => {
  markdownFiles.value = await noteService.listMarkdownFiles()
  loreFiles.value = await loreService.listMarkdownFiles()
})
</script>

<style scoped>
.side-panel {
  width: 200px;
  height: calc(100vh - 16px);
  display: flex;
  flex-direction: column;
}
.side-panel__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px 8px;
}
.side-panel__logo img {
  max-width: 120px;
  width: 50%;
  height: auto;
}
.el-menu-vertical-demo {
  flex: 1;
}

.side-panel__footer {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--el-border-color);
}
.theme-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

</style>
