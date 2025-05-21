<template>
  <div id="app">
    <h1>Vue 2 CKEditor Example</h1>
    <Editor v-model="content" />
  </div>
</template>

<script>
import Editor from './components/Editor.vue';

export default {
  name: 'App',
  components: {
    Editor
  },
  data() {
    return {
      content: '<h2>Welcome to CKEditor 5!</h2><p>Start editing this content...</p>'
    };
  }
};
</script>

<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}

h1 {
  text-align: center;
  color: #34495e;
  margin-bottom: 30px;
}
</style>