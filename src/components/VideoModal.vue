<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  videoUrl: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}

const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-backdrop" @click="handleBackdropClick">
      <div class="modal-container">
        <button class="modal-close" @click="$emit('close')" aria-label="Close modal">
          <svg class="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="modal-content">
          <iframe
            :src="videoUrl"
            class="video-iframe"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--flora-z-modal);
  padding: var(--flora-space-6);
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  background: var(--flora-color-surface);
  border-radius: var(--flora-radius-xl);
  box-shadow: var(--flora-shadow-xl);
  overflow: hidden;
}

.modal-close {
  position: absolute;
  top: var(--flora-space-4);
  right: var(--flora-space-4);
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: var(--flora-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--flora-color-text-primary);
  transition: all var(--flora-transition-fast);
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.95);
  transform: scale(1.1);
}

.close-icon {
  width: 24px;
  height: 24px;
}

.modal-content {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity var(--flora-transition-base);
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform var(--flora-transition-spring), opacity var(--flora-transition-base);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95);
  opacity: 0;
}

@media (max-width: 768px) {
  .modal-backdrop {
    padding: var(--flora-space-4);
  }

  .modal-close {
    top: var(--flora-space-2);
    right: var(--flora-space-2);
    width: 36px;
    height: 36px;
  }

  .close-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
