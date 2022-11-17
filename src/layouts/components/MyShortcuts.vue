<template>
  <div
    flex="~ gap-2"
    items-center
  >
    <monitor-layout-button v-show="isMonitor" />
    <main-edit-button v-show="isMain" />
    <dark-button />
    <language-button />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const isMain = computed(() => route.name === "menu.main");
const isMonitor = computed(() => route.name === "live.monitor");
</script>

<style scoped lang="scss">
.el-button + .el-button{
  margin-left: 0;
}
</style>
