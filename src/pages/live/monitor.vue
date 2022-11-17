<template>
  <div h-full>
    <div
      w-full
      h-full
      grid
      :grid-cols="monitorStore.useLayout.colCount"
    >
      <div
        v-for="(windowLayout, j) in monitorStore.useLayout.windowLayouts"
        :key="j"
        :class="windowLayout ? `col-span-${windowLayout.colSpan} row-span-${windowLayout.rowSpan}` : ''"
      >
        视频流
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const monitorStore = useMonitorStore();
</script>

<style lang="scss" scoped>
</style>

<route lang="yaml">
name: live.monitor
meta:
  layout: main
</route>
