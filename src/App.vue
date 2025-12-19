<script setup>
</script>

<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--flora-font-family-base);
  background: var(--flora-color-bg-primary);
  color: var(--flora-color-text-primary);
}

#app {
  min-height: 100vh;
}
</style>
