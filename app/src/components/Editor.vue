<template>
  <div class="editor">
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    editable
    class="demo-tabs"
    @edit="handleTabsEdit"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      <div v-html="item.html"></div>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'

import type { TabPaneName } from 'element-plus'

const props = defineProps<{ tabs: { name: string; title: string; html: string }[]; active: string }>()

let tabIndex = 2
const editableTabsValue = ref('')
const editableTabs = ref<{ name: string; title: string; html: string }[]>([])

function syncTabs() {
  editableTabs.value = [...props.tabs]
  editableTabsValue.value = props.active || (editableTabs.value[0]?.name ?? '')
}

onMounted(syncTabs)
watch(() => props.tabs, syncTabs, { deep: true })
watch(() => props.active, (val) => { editableTabsValue.value = val })

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add'
) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      html: '<p>New Tab content</p>',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
}
.editor {
  width: 100%;
  height: 100%;
}
</style>
