<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="header-content">
        <!-- Logo -->
        <router-link to="/" class="logo-link">
          <img src="../assets/logoFloraFeral.png" alt="FloraFeral" class="logo" />
          <span class="logo-text">FloraFeral</span>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="nav-desktop">
          <a href="#features" class="nav-link">Features</a>
          <a href="#tutorials" class="nav-link">Tutorials</a>
          <a href="https://github.com/floraferal" target="_blank" class="nav-link">GitHub</a>
          <a href="#faq" class="nav-link">FAQ</a>
        </nav>

        <!-- CTA Button -->
        <div class="header-cta">
          <a href="https://app.floraferal.com" target="_blank" class="btn-primary">
            Open App
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-menu-btn">
          <span class="sr-only">Menu</span>
          <svg v-if="!mobileMenuOpen" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav v-if="mobileMenuOpen" class="nav-mobile">
        <a href="#features" class="nav-link-mobile" @click="mobileMenuOpen = false">Features</a>
        <a href="#tutorials" class="nav-link-mobile" @click="mobileMenuOpen = false">Tutorials</a>
        <a href="https://github.com/floraferal" target="_blank" class="nav-link-mobile">GitHub</a>
        <a href="#faq" class="nav-link-mobile" @click="mobileMenuOpen = false">FAQ</a>
        <a href="https://app.floraferal.com" target="_blank" class="btn-primary-mobile">
          Open App
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: var(--flora-z-sticky);
  background: var(--flora-color-bg-primary);
  border-bottom: var(--flora-border-width-thin) solid var(--flora-color-border-subtle);
  backdrop-filter: blur(8px);
}

.header-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--flora-space-6);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: var(--flora-space-3);
  text-decoration: none;
  color: var(--flora-color-text-primary);
  font-weight: var(--flora-font-weight-semibold);
  font-size: var(--flora-font-size-lg);
}

.logo {
  height: 36px;
  width: auto;
}

.logo-text {
  font-family: var(--flora-font-family-base);
}

.nav-desktop {
  display: none;
  gap: var(--flora-space-8);
  align-items: center;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }
}

.nav-link {
  color: var(--flora-color-text-secondary);
  text-decoration: none;
  font-size: var(--flora-font-size-sm);
  font-weight: var(--flora-font-weight-medium);
  transition: color var(--flora-transition-fast);
}

.nav-link:hover {
  color: var(--flora-color-accent-text);
}

.header-cta {
  display: none;
}

@media (min-width: 768px) {
  .header-cta {
    display: block;
  }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--flora-space-3) var(--flora-space-6);
  background: var(--flora-color-accent);
  color: var(--flora-color-text-primary);
  border-radius: var(--flora-radius-md);
  font-size: var(--flora-font-size-sm);
  font-weight: var(--flora-font-weight-semibold);
  text-decoration: none;
  transition: all var(--flora-transition-base);
  box-shadow: var(--flora-shadow-accent);
}

.btn-primary:hover {
  background: var(--flora-color-accent-hover);
  box-shadow: var(--flora-shadow-accent-lg);
  transform: translateY(-1px);
}

.mobile-menu-btn {
  display: block;
  background: none;
  border: none;
  color: var(--flora-color-text-primary);
  cursor: pointer;
  padding: var(--flora-space-2);
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}

.icon {
  width: 24px;
  height: 24px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.nav-mobile {
  display: flex;
  flex-direction: column;
  gap: var(--flora-space-2);
  padding: var(--flora-space-4) 0;
  border-top: var(--flora-border-width-thin) solid var(--flora-color-border-subtle);
}

@media (min-width: 768px) {
  .nav-mobile {
    display: none;
  }
}

.nav-link-mobile {
  color: var(--flora-color-text-secondary);
  text-decoration: none;
  font-size: var(--flora-font-size-base);
  font-weight: var(--flora-font-weight-medium);
  padding: var(--flora-space-3);
  border-radius: var(--flora-radius-md);
  transition: all var(--flora-transition-fast);
}

.nav-link-mobile:hover {
  color: var(--flora-color-accent-text);
  background: var(--flora-color-surface);
}

.btn-primary-mobile {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--flora-space-3) var(--flora-space-6);
  background: var(--flora-color-accent);
  color: var(--flora-color-text-primary);
  border-radius: var(--flora-radius-md);
  font-size: var(--flora-font-size-base);
  font-weight: var(--flora-font-weight-semibold);
  text-decoration: none;
  margin-top: var(--flora-space-4);
}
</style>
