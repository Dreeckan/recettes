import {defaultTheme} from '@vuepress/theme-default';
import {defineUserConfig} from 'vuepress/cli';
import {viteBundler} from '@vuepress/bundler-vite';
import {globSync} from "glob";
import {slimsearchPlugin} from '@vuepress/plugin-slimsearch';

let fichiersSales = globSync('docs/sale/**/*.md').map(f => '/' + f.split('docs/')[1])
.reverse();
let fichiersSucres = globSync('docs/sucre/**/*.md').map(f => '/' + f.split('docs/')[1])
.reverse();

export default defineUserConfig({
  lang: 'fr-FR',
  title: 'Recettes',
  description: 'Un carnet de recettes privé, mais partagé ;)',
  lastUpdated: true,
  base: '/recettes/',

  theme: defaultTheme({
    // logo: 'https://vuejs.press/images/hero.png',

    // navbar: ['/sucre', '/sale'],
    sidebar: [
      '/',
      {
        text: 'Salé',
        collapsible: true,
        children: fichiersSales
      },
      {
        text: 'Sucré',
        collapsible: true,
        children: fichiersSucres
      }
    ],
  }),
  plugins: [
    slimsearchPlugin({
      indexContent: true,
    }),
  ],
  bundler: viteBundler(),
})
