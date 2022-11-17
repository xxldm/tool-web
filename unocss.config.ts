import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  safelist: [
    ...Array.from({ length: 9 }, (_, i) => `[grid-gap~="${i + 1}"]`),
    ...Array.from({ length: 9 }, (_, i) => `[grid-cols~="${i + 1}"]`),
    ...Array.from({ length: 9 }, (_, i) => `[grid-rows~="${i + 1}"]`),
    ...Array.from({ length: 9 }, (_, i) => `[col-span~="${i + 1}"]`),
    ...Array.from({ length: 9 }, (_, i) => `[row-span~="${i + 1}"]`),
  ],
});
