import type { Plugin } from 'vite';

export default function vitePluginTemplate(): Plugin {
  return {
    name: 'vite-plugin-template',
    enforce: 'pre',
    apply: 'build',
    config(config, { command }) {
      console.log('这里是config钩子');
    },

    configResolved(resolvedConfig) {
      console.log('这里是configResolved钩子');
    },

    configureServer(server) {
      console.log('这里是configureServer钩子');
    },

    transformIndexHtml(html) {
      console.log('这里是transformIndexHtml钩子');
    },
  }
}