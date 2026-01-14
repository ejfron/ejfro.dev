<script>


import { ref, onMounted } from 'vue';
import { Sun, Moon } from 'lucide-vue-next';

  export default {
    name: "Darkmode",
    components: {
      Sun,
      Moon
  },
}

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true;
    updateTheme();
  }
});
</script>

<template>
  <div class="app-container">
    <button @click="toggleDarkMode" class="theme-toggle">
      <Sun v-if="isDark" :size="20" />
      <Moon v-else :size="20" />
    </button>
    
    <router-view />
  </div>
</template>

<style>
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-primary);
  cursor: pointer;
}
</style>