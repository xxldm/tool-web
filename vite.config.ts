import VueI18n from "@intlify/vite-plugin-vue-i18n";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import type { ConfigEnv, UserConfigExport } from "vite";
import Pages from "vite-plugin-pages";
import { VitePWA } from "vite-plugin-pwa";
import Layouts from "vite-plugin-vue-layouts";

export default (_: ConfigEnv): UserConfigExport => ({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use \"~/styles/element-variables.scss\" as *;",
      },
    },
  },
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "vitest",
        "pinia",
        "@vueuse/core",
        "@vueuse/head",
        "@vueuse/math",
        {
          "axios": [
            ["default", "axios"],
          ],
          "@vueuse/integrations/useNProgress": [
            ["useNProgress", "useNProgress"],
          ],
          "@vueuse/integrations/useAxios": [
            ["useAxios", "useAxios"],
          ],
          "@vueuse/sound": [
            ["useSound", "useSound"],
          ],
          "@vueuse/router": [
            ["useRouteHash", "useRouteHash"],
            ["useRouteParams", "useRouteParams"],
            ["useRouteQuery", "useRouteQuery"],
          ],
          "@vueuse/electron": [
            ["useIpcRenderer", "useIpcRenderer"],
            ["useIpcRendererInvoke", "useIpcRendererInvoke"],
            ["useIpcRendererOn", "useIpcRendererOn"],
          ],
        },
      ],
      dts: true,
      dirs: [
        "src/composables",
        "src/store",
      ],
      vueTemplate: true,
      // 自动导入 Element Plus 相关 **函数** ，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dirs: ["src/components", "src/layouts/components"],
      dts: true,
      // 自动导入 Element Plus 相关 **组件**
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "工具箱",
        short_name: "工具箱",
        theme_color: "#ffffff",
        icons: [
          {
            src: "./favicon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "./favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, "src/locales/**")],
    }),
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom",
  },
});

