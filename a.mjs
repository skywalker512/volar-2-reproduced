import fs from 'fs';

// fs.writeFileSync(
//   `./src/App1.vue`,
//   `<script setup lang="ts">
// // This starter template is using Vue 3 <script setup> SFCs
// // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// ${Array.from({ length: 1000 })
//   .map((_, i) => `import ZX00${i} from './components/ZX00${i}.vue'`)
//   .join('\n')}
// </script>

// <template>
//   <img alt="Vue logo" src="./assets/logo.png" />
//   <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
//   ${Array.from({ length: 1000 })
//     .map((_, i) => `<ZX00${i} msg="Hello Vue 3 + TypeScript + Vite" />`)
//     .join('\n')}
//   <div ></div>
// </template>

// <style>
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
// </style>
// `
// );

Array.from({ length: 1000 }).forEach((_, i) => {
  fs.writeFileSync(
    `./src/components/ZX00${i}.vue`,
    `<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(${Math.random() * 1000})
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  ${
    Math.random() * 1000 > 500
      ? `<p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>`
      : ''
  }

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

  `
  );
});
