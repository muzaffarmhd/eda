<template>
  <div class="notes">
    <Editor :tabs="tabs" :active="activeTab" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Editor from '@/components/Editor.vue';
import { noteService } from '@/database/services/NoteService';
import { loreService } from '@/database/services/LoreService';

const route = useRoute();
const tabs = ref<{ name: string; title: string; html: string }[]>([]);
const activeTab = ref('');

async function openMarkdown(name: string) {
  const isLore = route.path.startsWith('/lore');
  const result = isLore
    ? await loreService.loadMarkdownAsHtml(name)
    : await noteService.loadMarkdownAsHtml(name);
  if (!result) return;
  const tabName = `${isLore ? 'lore' : 'md'}:${name}`;
  const existing = tabs.value.find((t) => t.name === tabName);
  if (!existing) {
    tabs.value.push({ name: tabName, title: result.title, html: result.html });
  }
  activeTab.value = tabName;
}

function syncFromRoute() {
  const file = (route.query.file as string) || '';
  if (file) {
    openMarkdown(file);
  }
}

onMounted(syncFromRoute);
watch(() => route.fullPath, syncFromRoute);
</script>

<style scoped>
.notes {
  margin-left: -1px;
  width: 100%;
  height: 100%;
}
</style>