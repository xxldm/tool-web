import type { RouteRecordRaw } from "vue-router";

import { routes } from "~/modules/router";

export const useRouterStore = defineStore("my-router", () => {
  const routes_menu = useSorted(useArrayFilter(routes, route => !route.children![0].meta?.hidden), (a, b) => routeSorted(a.children![0], b.children![0]));
  return {
    routes_menu,
  };
});

function routeSorted(a: RouteRecordRaw, b: RouteRecordRaw) {
  const aSort = a.meta?.sort ? +a.meta.sort : 0;
  const bSort = b.meta?.sort ? +b.meta.sort : 0;
  return bSort - aSort;
}

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRouterStore, import.meta.hot));
}
