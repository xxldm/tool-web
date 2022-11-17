/* eslint-disable no-sparse-arrays */
const layouts = [
  { colCount: 1, windowLayouts: new Array(1) },
  { colCount: 2, windowLayouts: new Array(4) },
  // 最后一个逗号后面没空格会被忽略,所以需要多一个,下面这个数组实际长度为6
  { colCount: 3, windowLayouts: [{ colSpan: 2, rowSpan: 2 }, , , , , ,] },
  { colCount: 4, windowLayouts: [{ colSpan: 3, rowSpan: 3 }, , , , , , , ,] },
  { colCount: 3, windowLayouts: new Array(9) },
  { colCount: 4, windowLayouts: [{ colSpan: 2, rowSpan: 2 }, , , , , { colSpan: 2, rowSpan: 2 }, , , , ,] },
  { colCount: 4, windowLayouts: new Array(16) },
];

export const useMonitorStore = defineStore("monitor", () => {
  const useIndex = useStorage("monitorLayoutIndex", 0, myStorage);
  const useLayout = computed(() => layouts[useIndex.value]);
  return {
    useIndex,
    useLayout,
    layouts,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMonitorStore, import.meta.hot));
}
