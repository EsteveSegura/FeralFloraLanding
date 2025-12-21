<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Brand Column -->
        <div class="footer-column">
          <div class="footer-brand">
            <img src="../assets/logoFloraFeral.png" alt="FloraFeral" class="footer-logo" />
            <span class="footer-brand-text">FloraFeral</span>
          </div>
          <p class="footer-description">
            Open-source AI canvas for multi-model image generation. Local-first, BYOK, full control.
          </p>
        </div>

        <!-- Product Column -->
        <div class="footer-column">
          <h3 class="footer-title">Product</h3>
          <ul class="footer-links">
            <li><a href="https://app.floraferal.com" target="_blank" class="footer-link">Open App</a></li>
            <li><a href="#features" class="footer-link">Features</a></li>
            <li><a href="#tutorials" class="footer-link">Tutorials</a></li>
            <li><a href="#faq" class="footer-link">FAQ</a></li>
          </ul>
        </div>

        <!-- Resources Column -->
        <div class="footer-column">
          <h3 class="footer-title">Resources</h3>
          <ul class="footer-links">
            <li><a href="https://github.com/EsteveSegura/FloraFeral" target="_blank" class="footer-link">GitHub</a></li>
            <li><a href="https://github.com/EsteveSegura/FloraFeral#readme" target="_blank" class="footer-link">Documentation</a></li>
            <li><a href="#faq" class="footer-link">FAQ</a></li>
            <li><a href="https://github.com/EsteveSegura/FloraFeral/releases" target="_blank" class="footer-link">Changelog</a></li>
          </ul>
        </div>

        <!-- Community Column -->
        <div class="footer-column">
          <h3 class="footer-title">Community</h3>
          <ul class="footer-links">
            <li><a href="https://discord.gg/sPyusMD4fn" target="_blank" class="footer-link">Discord</a></li>
            <li><a href="https://github.com/EsteveSegura/FloraFeral" target="_blank" class="footer-link">Contribute</a></li>
            <li><a href="https://replicate.com" target="_blank" class="footer-link">Get Replicate Key</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p class="footer-copyright">
          © {{ currentYear }} FloraFeral. Open-source under MIT License.
        </p>
        <div class="footer-social">
          <a href="https://github.com/EsteveSegura/FloraFeral" target="_blank" class="social-link" aria-label="GitHub">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--flora-color-bg-secondary);
  border-top: var(--flora-border-width-thin) solid var(--flora-color-border-subtle);
  padding: var(--flora-space-16) 0 var(--flora-space-8);
}

.footer-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--flora-space-6);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--flora-space-8);
  margin-bottom: var(--flora-space-12);
}

@media (min-width: 640px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-content {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: var(--flora-space-4);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--flora-space-3);
  margin-bottom: var(--flora-space-2);
}

.footer-logo {
  height: 32px;
  width: auto;
}

.footer-brand-text {
  font-size: var(--flora-font-size-lg);
  font-weight: var(--flora-font-weight-semibold);
  color: var(--flora-color-text-primary);
}

.footer-description {
  color: var(--flora-color-text-secondary);
  font-size: var(--flora-font-size-sm);
  line-height: var(--flora-line-height-relaxed);
  max-width: 300px;
}

.footer-title {
  font-size: var(--flora-font-size-sm);
  font-weight: var(--flora-font-weight-semibold);
  color: var(--flora-color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--flora-space-3);
}

.footer-link {
  color: var(--flora-color-text-secondary);
  text-decoration: none;
  font-size: var(--flora-font-size-sm);
  transition: color var(--flora-transition-fast);
}

.footer-link:hover {
  color: var(--flora-color-accent-text);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: var(--flora-space-4);
  padding-top: var(--flora-space-8);
  border-top: var(--flora-border-width-thin) solid var(--flora-color-border-subtle);
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
  }
}

.footer-copyright {
  color: var(--flora-color-text-tertiary);
  font-size: var(--flora-font-size-xs);
}

.footer-social {
  display: flex;
  gap: var(--flora-space-4);
}

.social-link {
  color: var(--flora-color-text-secondary);
  transition: color var(--flora-transition-fast);
}

.social-link:hover {
  color: var(--flora-color-accent-text);
}

.social-icon {
  width: 20px;
  height: 20px;
}
</style>
