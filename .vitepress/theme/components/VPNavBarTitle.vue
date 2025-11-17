<script setup lang="ts">
import { useData } from 'vitepress'
const { site } = useData()
</script>

<template>
  <VPLink class="title" :href="'/'" :no-icon="true">
    <picture class="logo">
      <source srcset="/ocm-logo-white-text.svg" media="(prefers-color-scheme: dark)" />
      <img
        src="/ocm-logo-black-text.svg"
        alt="Open Component Model"
        height="32"
        decoding="async"
        fetchpriority="high"
      />
    </picture>
    <span class="text">{{ site.title }}</span>
  </VPLink>
</template>

<script lang="ts">
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
export default {}
</script>

<style scoped>
.title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  list-style: none; /* ensure no list bullet if wrapped in li */
}
.logo {
  display: inline-block;
}
.logo img {
  height: 32px;
  width: auto; /* preserve aspect ratio for wordmark */
}
.text {
  font-weight: 600;
}
</style>
