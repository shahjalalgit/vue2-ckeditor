<template>
  <div class="hello-world">
    <h1 class="title">{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="incrementCount" class="button">
        count is {{ count }}
      </button>
      <p class="description">
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <div class="links">
      <p>
        Check out
        <a href="https://vuejs.org/v2/guide/" target="_blank" class="link">Vue 2 Guide</a>
      </p>
      <p>
        Learn more about
        <a href="https://vitejs.dev/" target="_blank" class="link">Vite</a>
      </p>
      <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incrementCount() {
      this.count++
    }
  }
}
</script>

<style scoped>
.hello-world {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 3.2em;
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #0071e3, #42b883);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fade-in 0.8s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  padding: 2em;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #0071e3;
  color: white;
  cursor: pointer;
  transition: all 0.25s ease;
}

.button:hover {
  background-color: #0077ed;
  transform: scale(1.03);
}

.button:focus,
.button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.description {
  margin-top: 1.5rem;
  color: #666;
}

.links {
  margin-top: 2rem;
}

.link {
  font-weight: 500;
  color: #0071e3;
  text-decoration: none;
  transition: color 0.2s ease;
}

.link:hover {
  color: #0077ed;
  text-decoration: underline;
}

.read-the-docs {
  color: #888;
  margin-top: 1.5rem;
  font-size: 0.9em;
  animation: subtle-bounce 4s ease-in-out infinite;
}

@keyframes subtle-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@media (prefers-color-scheme: dark) {
  .card {
    background-color: rgba(36, 36, 36, 0.8);
  }

  .description {
    color: #aaa;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5em;
  }
  
  .card {
    padding: 1.5em;
  }
}
</style>