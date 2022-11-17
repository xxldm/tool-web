<template>
  <div>
    <el-button
      circle
      size="large"
      :title="t('shortcuts.button.title.MonitorLayout')"
      @click="showDialog = true"
    >
      <span
        i-carbon-workspace
        text-2xl
      />
    </el-button>
    <el-dialog
      v-model="showDialog"
      :title="t('shortcuts.button.title.MonitorLayout')"
    >
      <div
        grid="~ cols-3 gap-2"
        h-100
      >
        <div
          v-for="(layout, index) in monitorStore.layouts"
          :key="index"
          class="box"
          grid
          :grid-cols="layout.colCount"
          @click="monitorStore.useIndex = index; showDialog = false;"
        >
          <div
            v-for="(windowLayout, j) in layout.windowLayouts"
            :key="j"
            :class="windowLayout ? `window col-span-${windowLayout.colSpan} row-span-${windowLayout.rowSpan}` : 'window'"
          >
            {{ j + 1 }}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const showDialog = ref(false);
const monitorStore = useMonitorStore();
</script>

<style lang="scss" scoped>
.box {
  --at-apply: b-rd-2 p-2 grid-gap-2 cursor-pointer;
}
.box:hover {
  background-color: var(--el-color-primary-light-7);
}
.window {
  --at-apply: b-rd-1 h-full flex justify-center items-center;
  background-color: var(--el-color-primary-light-3);
}
</style>
