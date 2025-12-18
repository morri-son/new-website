<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <div class="custom-footer">
        <div class="footer-content">
          <div class="footer-logos">
            <img src="/ord-footer-bmwe.png" alt="EU Funding" class="footer-logo-eu" />
            <a href="https://neonephos.org/" target="_blank" rel="noopener">
              <img src="/ord-footer-neonephos.svg" alt="Neonephos" class="footer-logo-neonephos dark-only" />
              <img src="/ord-footer-neonephos-light.svg" alt="Neonephos" class="footer-logo-neonephos light-only" />
            </a>
          </div>
          <div class="footer-text">
            <p><strong>Funded by the European Union – NextGenerationEU.</strong></p>
            <p class="footer-small">The views and opinions expressed are solely those of the author(s) and do not necessarily reflect the views of the European Union or the European Commission.</p>
            <p class="footer-small"><strong>Copyright © Linux Foundation Europe.</strong> Open Component Model is a project of the Open Component Model Community.</p>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
.custom-footer {
  margin-top: 3rem;
  padding: 2rem 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
}

.footer-logos {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.footer-logo-eu {
  height: 60px;
  width: auto;
}

.footer-logo-neonephos {
  height: 40px;
  width: auto;
}

.light-only {
  display: none;
}

.dark .light-only {
  display: inline;
}

.dark .dark-only {
  display: none;
}

.footer-text {
  text-align: center;
  color: var(--vp-c-text-2);
}

.footer-text p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.footer-small {
  font-size: 0.8rem !important;
  color: var(--vp-c-text-3) !important;
}

@media (min-width: 768px) {
  .footer-logos {
    justify-content: flex-start;
  }
  
  .footer-text {
    text-align: left;
  }
}
</style>
