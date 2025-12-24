<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import VideoModal from '../components/VideoModal.vue'

const isModalOpen = ref(false)
const currentVideoUrl = ref('')

const openVideoModal = (videoUrl) => {
  currentVideoUrl.value = videoUrl
  isModalOpen.value = true
}

const closeVideoModal = () => {
  isModalOpen.value = false
  currentVideoUrl.value = ''
}

const faqItems = ref([
  {
    question: 'Do I need to create an account?',
    answer: 'No account needed for FloraFeral. Everything runs locally in your browser. The only account you need is with Replicate, a trusted provider (a Cloudflare company), to access their AI models.',
    open: false
  },
  {
    question: 'Where is my data stored?',
    answer: 'Your data lives in your browser. You decide whether to save workflows locally or not. Replicate stores generated images for 1 hour on their servers, then they\'re automatically deleted.',
    open: false
  },
  {
    question: 'How are inferences executed?',
    answer: 'Using your own Replicate API key (BYOK - Bring Your Own Key). You pay Replicate directly for compute.',
    open: false
  },
  {
    question: 'Do I own the rights to my outputs?',
    answer: 'Your assets are yours. Also check the terms of the specific models you use on Replicate.',
    open: false
  },
  {
    question: 'Does it work in the browser or require installation?',
    answer: 'FloraFeral runs directly in your browser. No installation needed.',
    open: false
  },
  {
    question: 'What does FloraFeral cost?',
    answer: 'FloraFeral is open-source and free. Inference costs depend on your Replicate account usage.',
    open: false
  },
  {
    question: 'Why is FloraFeral free when others charge?',
    answer: 'We believe in the internet as it used to be—built for the common good, not just profit. FloraFeral is a passion project created to empower creators, not extract money from them. Open-source, transparent, and community-driven.',
    open: false
  },
  {
    question: 'Why doesn\'t FloraFeral have cloud storage or real-time collaboration?',
    answer: 'FloraFeral is designed to be a reliable, long-lasting tool. With a single maintainer, the focus is on sustainable core features that can be maintained long-term. This approach ensures the project remains stable and trustworthy for years to come, rather than adding complexity that could compromise its reliability.',
    open: false
  }
])

const toggleFaq = (index) => {
  faqItems.value[index].open = !faqItems.value[index].open
}
</script>

<template>
  <div class="page">
    <Header />

    <main class="main">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">
                Full Control Over Your AI Generations
              </h1>
              <p class="hero-subtitle">
                FloraFeral is an open-source canvas for orchestrating multiple models and producing reproducible images. No accounts, no backend, your data stays on your device.
              </p>
              <div class="hero-ctas">
                <a href="https://app.floraferal.com" target="_blank" class="btn-primary-large">
                  Open App
                </a>
                <a href="#first-steps" class="btn-secondary-large">
                  Quick Start
                </a>
              </div>
              <p class="hero-note">
                <svg class="icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Requires your Replicate API key (BYOK)
              </p>
            </div>
            <div class="hero-visual">
              <img src="../assets/hero.png" alt="FloraFeral Canvas Interface" class="hero-image" />
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="section section-dark">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Powerful Features</h2>
            <p class="section-subtitle">Everything you need for professional AI image generation</p>
          </div>

          <div class="features-list">
            <!-- Feature 1 -->
            <div class="feature-row">
              <div class="feature-content">
                <h3 class="feature-title">Latest Models Available</h3>
                <p class="feature-description">Access cutting-edge models like VEO, Flux, GPT-4.5, and more through Replicate's catalog. Stay at the forefront of AI image generation with the newest and most powerful models.</p>
              </div>
              <div class="feature-visual">
                <img src="../assets/models.png" alt="Latest AI Models" class="feature-image" />
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="feature-row feature-row-reverse">
              <div class="feature-content">
                <h3 class="feature-title">Export/Import Workflows</h3>
                <p class="feature-description">Share workflow files without uploading anything to servers. Full portability and control over your creative processes. Save, share, and collaborate without compromises.</p>
              </div>
              <div class="feature-visual">
                <img src="../assets/save.png" alt="Export and Import Workflows" class="feature-image" />
              </div>
            </div>

            <!-- Feature 3 -->
            <div class="feature-row">
              <div class="feature-content">
                <h3 class="feature-title">Built For Creators, Not Profit</h3>
                <p class="feature-description">Tools designed for designer comfort and productivity, not for extracting money from you. Open-source, transparent, and focused on empowering creators.</p>
              </div>
              <div class="feature-visual">
                <img src="../assets/for_creators.png" alt="Built For Creators" class="feature-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Start Section -->
      <section id="first-steps" class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Quick Start</h2>
            <p class="section-subtitle">Get started with FloraFeral in minutes</p>
          </div>
          <div class="video-container">
            <iframe
              class="video-iframe"
              src="https://www.youtube.com/embed/ukJTEuO4QUU"
              title="FloraFeral Tutorial"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section id="benefits" class="section section-dark">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Why Choose FloraFeral</h2>
          </div>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="benefit-title">Privacy by Design</h3>
              <p class="benefit-description">No accounts, no backend, local-first. Your data never leaves your device.</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="benefit-title">Control Without Friction</h3>
              <p class="benefit-description">Fine-tune parameters, seeds, and multi-model chaining with precision.</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 class="benefit-title">Reproducibility</h3>
              <p class="benefit-description">Consistent results you can version and repeat. Save and restore workflows.</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="benefit-title">Open-Source & Auditable</h3>
              <p class="benefit-description">No vendor lock-in. Inspect the code, contribute, and own your tools.</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 class="benefit-title">BYOK</h3>
              <p class="benefit-description">Use your own Replicate API key. You control costs and access.</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 class="benefit-title">Reusable Workflows</h3>
              <p class="benefit-description">Save templates and workflows to scale your creative process.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Replicate Integration Section -->
      <section id="replicate" class="section">
        <div class="container">
          <div class="integration-content">
            <h2 class="section-title">Powered by Replicate</h2>
            <p class="integration-text">
              FloraFeral doesn't run models on its servers. Use your Replicate API key to execute inferences with their catalog of compatible models. Billing and limits run through your Replicate account.
            </p>
            <a href="https://replicate.com/account/api-tokens" target="_blank" class="btn-secondary-large">
              Get Your Replicate Key
              <svg class="icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Tutorials Section -->
      <section id="tutorials" class="section section-dark">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Learn in Minutes</h2>
            <p class="section-subtitle">Step-by-step tutorials to master FloraFeral</p>
          </div>
          <div class="tutorials-grid">
            <div class="tutorial-card" @click="openVideoModal('https://www.youtube.com/embed/ukJTEuO4QUU')">
              <div class="tutorial-thumbnail">
                <img src="../assets/miniature_1.png" alt="From Zero to First Image" class="thumbnail-image" />
                <div class="play-button-overlay">
                  <svg class="tutorial-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 class="tutorial-title">From Zero to First Image</h3>
              <p class="tutorial-description">Complete beginner's guide to your first generation</p>
            </div>
            <div class="tutorial-card" @click="openVideoModal('https://www.youtube.com/embed/KqdnvYihBQ4')">
              <div class="tutorial-thumbnail">
                <img src="../assets/miniature_2.png" alt="Creating a set of icons" class="thumbnail-image" />
                <div class="play-button-overlay">
                  <svg class="tutorial-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 class="tutorial-title">Creating a set of icons while maintaning consistency</h3>
              <p class="tutorial-description">Learn to chain models in a single workflow</p>
            </div>
            <div class="tutorial-card tutorial-card-disabled">
              <div class="tutorial-placeholder">
                <svg class="tutorial-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="soon-badge">Soon</span>
              </div>
              <h3 class="tutorial-title">Seeds & Variations</h3>
              <p class="tutorial-description">Master reproducibility and create variations</p>
            </div>
            <div class="tutorial-card tutorial-card-disabled">
              <div class="tutorial-placeholder">
                <svg class="tutorial-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="soon-badge">Soon</span>
              </div>
              <h3 class="tutorial-title">Upscale & Refine</h3>
              <p class="tutorial-description">Add upscaling and refinement to your pipeline</p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="faq" class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Frequently Asked Questions</h2>
          </div>
          <div class="faq-container">
            <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="faq-item"
            >
              <button
                @click="toggleFaq(index)"
                class="faq-question"
                :class="{ 'faq-question-open': item.open }"
              >
                <span>{{ item.question }}</span>
                <svg
                  class="faq-icon"
                  :class="{ 'faq-icon-open': item.open }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="item.open" class="faq-answer">
                {{ item.answer }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />

    <VideoModal
      :isOpen="isModalOpen"
      :videoUrl="currentVideoUrl"
      @close="closeVideoModal"
    />
  </div>
</template>

<style scoped>
.page {
  background: var(--flora-color-bg-primary);
  color: var(--flora-color-text-primary);
  font-family: var(--flora-font-family-base);
  min-height: 100vh;
  overflow-x: hidden;
}

.main {
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--flora-space-6);
}

.section {
  padding: var(--flora-space-16) 0;
}

@media (min-width: 1024px) {
  .section {
    padding: 6rem 0;
  }
}

.section-dark {
  background: var(--flora-color-bg-secondary);
}

.section-header {
  text-align: center;
  margin-bottom: var(--flora-space-12);
}

.section-title {
  font-size: var(--flora-font-size-3xl);
  font-weight: var(--flora-font-weight-bold);
  color: var(--flora-color-text-primary);
  margin-bottom: var(--flora-space-4);
  line-height: var(--flora-line-height-tight);
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
}

.section-subtitle {
  font-size: var(--flora-font-size-lg);
  color: var(--flora-color-text-secondary);
  line-height: var(--flora-line-height-relaxed);
}

/* Hero Section */
.hero {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .hero {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--flora-space-12);
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: var(--flora-space-6);
  text-align: center;
  align-items: center;
  max-width: 900px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.hero-text::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 120%;
  background: radial-gradient(ellipse at center,
    rgba(22, 163, 74, 0.15) 0%,
    rgba(22, 163, 74, 0.08) 30%,
    rgba(22, 163, 74, 0.03) 60%,
    transparent 100%
  );
  z-index: -1;
  pointer-events: none;
  filter: blur(40px);
}

@media (min-width: 768px) {
  .hero-text::before {
    width: 130%;
    height: 160%;
    filter: blur(60px);
  }
}

.hero-title {
  font-size: 2.5rem;
  font-weight: var(--flora-font-weight-bold);
  line-height: var(--flora-line-height-tight);
  color: var(--flora-color-text-primary);
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

.hero-subtitle {
  font-size: var(--flora-font-size-lg);
  color: var(--flora-color-text-secondary);
  line-height: var(--flora-line-height-relaxed);
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

@media (min-width: 768px) {
  .hero-subtitle {
    font-size: var(--flora-font-size-xl);
  }
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--flora-space-4);
}

.hero-note {
  display: flex;
  align-items: center;
  gap: var(--flora-space-2);
  font-size: var(--flora-font-size-sm);
  color: var(--flora-color-text-tertiary);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: var(--flora-space-8);
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: var(--flora-radius-xl);
}

/* Buttons */
.btn-primary-large,
.btn-secondary-large,
.btn-primary-xl {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--flora-space-2);
  padding: var(--flora-space-4) var(--flora-space-8);
  font-size: var(--flora-font-size-base);
  font-weight: var(--flora-font-weight-semibold);
  border-radius: var(--flora-radius-full);
  text-decoration: none;
  transition: all var(--flora-transition-base);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-primary-large {
  background: linear-gradient(135deg, var(--flora-color-accent-600) 0%, var(--flora-color-accent-700) 100%);
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(22, 163, 74, 0.4), 0 2px 8px rgba(22, 163, 74, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-primary-large::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
  opacity: 0;
  transition: opacity var(--flora-transition-base);
}

.btn-primary-large:hover::before {
  opacity: 1;
}

.btn-primary-large:hover {
  box-shadow: 0 8px 24px rgba(22, 163, 74, 0.5), 0 4px 12px rgba(22, 163, 74, 0.4);
  transform: translateY(-3px);
}

.btn-primary-large:active {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.4);
}

.btn-secondary-large {
  background: rgba(255, 255, 255, 0.03);
  color: var(--flora-color-text-primary);
  border: 2px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
}

.btn-secondary-large:hover {
  border-color: var(--flora-color-accent);
  background: rgba(22, 163, 74, 0.1);
  color: var(--flora-color-accent-text);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.2);
}

.btn-secondary-large:active {
  transform: translateY(0);
}

.btn-primary-xl {
  padding: var(--flora-space-5) var(--flora-space-10);
  font-size: var(--flora-font-size-lg);
  background: linear-gradient(135deg, var(--flora-color-accent-600) 0%, var(--flora-color-accent-700) 100%);
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(22, 163, 74, 0.5), 0 4px 12px rgba(22, 163, 74, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-primary-xl::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
  opacity: 0;
  transition: opacity var(--flora-transition-base);
}

.btn-primary-xl:hover::before {
  opacity: 1;
}

.btn-primary-xl:hover {
  box-shadow: 0 12px 32px rgba(22, 163, 74, 0.6), 0 6px 16px rgba(22, 163, 74, 0.5);
  transform: translateY(-3px);
}

.btn-primary-xl:active {
  transform: translateY(-1px);
}

.icon-sm {
  width: 20px;
  height: 20px;
}

/* Video Container */
.video-container {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: var(--flora-radius-xl);
  border: var(--flora-border-width-thin) solid var(--flora-color-border-default);
  box-shadow: var(--flora-shadow-lg);
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* Benefits Grid */
.benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--flora-space-6);
}

@media (min-width: 640px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.benefit-card {
  padding: var(--flora-space-6);
  background: var(--flora-color-surface);
  border: var(--flora-border-width-thin) solid var(--flora-color-border-default);
  border-radius: var(--flora-radius-lg);
  display: flex;
  flex-direction: column;
  gap: var(--flora-space-3);
  transition: all var(--flora-transition-base);
}

.benefit-card:hover {
  border-color: var(--flora-color-accent);
  box-shadow: var(--flora-shadow-accent);
  transform: translateY(-2px);
}

.benefit-icon {
  width: 48px;
  height: 48px;
  color: var(--flora-color-accent);
}

.benefit-title {
  font-size: var(--flora-font-size-lg);
  font-weight: var(--flora-font-weight-semibold);
  color: var(--flora-color-text-primary);
}

.benefit-description {
  color: var(--flora-color-text-secondary);
  font-size: var(--flora-font-size-sm);
  line-height: var(--flora-line-height-relaxed);
}

/* Features List */
.features-list {
  display: flex;
  flex-direction: column;
  gap: var(--flora-space-16);
  margin-top: var(--flora-space-12);
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--flora-space-8);
  align-items: center;
}

@media (min-width: 1024px) {
  .feature-row {
    grid-template-columns: 1fr 1fr;
    gap: var(--flora-space-12);
  }
}

.feature-row-reverse {
  direction: ltr;
}

@media (min-width: 1024px) {
  .feature-row-reverse {
    direction: rtl;
  }

  .feature-row-reverse .feature-content,
  .feature-row-reverse .feature-visual {
    direction: ltr;
  }
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: var(--flora-space-4);
}

.feature-title {
  font-size: var(--flora-font-size-2xl);
  font-weight: var(--flora-font-weight-bold);
  color: var(--flora-color-text-primary);
  line-height: var(--flora-line-height-tight);
}

@media (min-width: 768px) {
  .feature-title {
    font-size: var(--flora-font-size-3xl);
  }
}

.feature-description {
  color: var(--flora-color-text-secondary);
  font-size: var(--flora-font-size-base);
  line-height: var(--flora-line-height-relaxed);
}

@media (min-width: 768px) {
  .feature-description {
    font-size: var(--flora-font-size-lg);
  }
}

.feature-visual {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-image {
  width: 100%;
  height: auto;
  border-radius: var(--flora-radius-xl);
}

/* Integration Content */
.integration-content {
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--flora-space-6);
}

.integration-text {
  font-size: var(--flora-font-size-lg);
  color: var(--flora-color-text-secondary);
  line-height: var(--flora-line-height-relaxed);
}

/* Tutorials Grid */
.tutorials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--flora-space-6);
}

@media (min-width: 640px) {
  .tutorials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .tutorials-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.tutorial-card {
  background: var(--flora-color-surface);
  border: var(--flora-border-width-thin) solid var(--flora-color-border-default);
  border-radius: var(--flora-radius-lg);
  overflow: hidden;
  transition: all var(--flora-transition-base);
  cursor: pointer;
}

.tutorial-card:hover {
  border-color: var(--flora-color-accent);
  box-shadow: var(--flora-shadow-md);
  transform: translateY(-2px);
}

.tutorial-placeholder {
  aspect-ratio: 16 / 9;
  background: var(--flora-color-bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.tutorial-placeholder .tutorial-icon {
  width: 64px;
  height: 64px;
  color: #ffffff;
  opacity: 0.6;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
  transition: transform var(--flora-transition-base);
}

.tutorial-card:hover .tutorial-placeholder .tutorial-icon {
  transform: scale(1.1);
}

.soon-badge {
  position: absolute;
  top: var(--flora-space-3);
  right: var(--flora-space-3);
  background: var(--flora-color-accent-600);
  color: #ffffff;
  padding: var(--flora-space-1) var(--flora-space-3);
  border-radius: var(--flora-radius-full);
  font-size: var(--flora-font-size-xs);
  font-weight: var(--flora-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.4);
}

.tutorial-card-disabled {
  cursor: not-allowed;
  opacity: 0.8;
}

.tutorial-card-disabled:hover {
  transform: none;
  box-shadow: none;
  border-color: var(--flora-color-border-default);
}

.tutorial-card-disabled .tutorial-title,
.tutorial-card-disabled .tutorial-description {
  filter: blur(4px);
  user-select: none;
}

.tutorial-card-disabled:hover .tutorial-placeholder .tutorial-icon {
  transform: none;
}

.tutorial-thumbnail {
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  background: var(--flora-color-bg-tertiary);
}

.tutorial-thumbnail .soon-badge {
  position: absolute;
  top: var(--flora-space-3);
  right: var(--flora-space-3);
  z-index: 10;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.play-button-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: background var(--flora-transition-base);
}

.tutorial-card:hover .play-button-overlay {
  background: rgba(0, 0, 0, 0.5);
}

.play-button-overlay .tutorial-icon {
  width: 64px;
  height: 64px;
  color: #ffffff;
  opacity: 0.6;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
  transition: transform var(--flora-transition-base);
}

.tutorial-card:hover .play-button-overlay .tutorial-icon {
  transform: scale(1.1);
}

.tutorial-icon {
  width: 48px;
  height: 48px;
  color: var(--flora-color-text-tertiary);
}

.tutorial-title {
  font-size: var(--flora-font-size-base);
  font-weight: var(--flora-font-weight-semibold);
  color: var(--flora-color-text-primary);
  padding: var(--flora-space-4);
  padding-bottom: var(--flora-space-2);
}

.tutorial-description {
  font-size: var(--flora-font-size-sm);
  color: var(--flora-color-text-secondary);
  padding: 0 var(--flora-space-4) var(--flora-space-4);
}

/* FAQ */
.faq-container {
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--flora-space-4);
}

.faq-item {
  background: var(--flora-color-surface);
  border: var(--flora-border-width-thin) solid var(--flora-color-border-default);
  border-radius: var(--flora-radius-lg);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--flora-space-5);
  background: transparent;
  border: none;
  color: var(--flora-color-text-primary);
  font-size: var(--flora-font-size-base);
  font-weight: var(--flora-font-weight-semibold);
  text-align: left;
  cursor: pointer;
  transition: background var(--flora-transition-fast);
}

.faq-question:hover {
  background: var(--flora-color-surface-hover);
}

.faq-question-open {
  color: var(--flora-color-accent-text);
}

.faq-icon {
  width: 20px;
  height: 20px;
  color: var(--flora-color-text-tertiary);
  transition: transform var(--flora-transition-base);
  flex-shrink: 0;
}

.faq-icon-open {
  transform: rotate(180deg);
  color: var(--flora-color-accent);
}

.faq-answer {
  padding: 0 var(--flora-space-5) var(--flora-space-5);
  color: var(--flora-color-text-secondary);
  line-height: var(--flora-line-height-relaxed);
  font-size: var(--flora-font-size-sm);
}
</style>
