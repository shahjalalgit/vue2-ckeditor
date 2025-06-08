<template>
  <div class="home">
    <h1>Welcome to CKEditor 5 with Vue Router</h1>
    <p>This is the home page. Navigate to the editor to see the CKEditor in action.</p>
    <router-link to="/editor" class="nav-link">Go to Editor</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.nav-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #3aa876;
}
</style>
