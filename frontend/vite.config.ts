import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

const pathSrc = path.resolve(__dirname, 'src')


import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  css: {
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@use "~/styles/element/index.scss" as *;`,
    //   },
    // },
  },
  plugins: [
    vue(),
    AutoImport({
      // 目标文件
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // 全局引入插件
      imports: [
        // presets
        'vue',
        'vue-router',
      ],
      // 解决eslint报错问题
      eslintrc: {
        enabled: false, // 默认 `false`
        filepath: './.eslintrc-auto-import.json', // 默认 `./.eslintrc-auto-import.json`
        globalsPropValue: true, // 默认 `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      // 解析器，例如element-plus的ElementPlusResolver
      // 详见 https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass' // 非官方，必要
        }),

        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      // 声明文件生成位置和文件名称
      dts: './auto-imports.d.ts'
    }),

    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          //可用图标地址：http://icon-sets.iconify.design/ep/
          enabledCollections: ['ep'],
        }),

        ElementPlusResolver(),
      ],
    }),

    Icons({
      autoInstall: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ]
    }),

  ]
})
