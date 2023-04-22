<template>
  <TopBar />
  <video src="@/assets/img/qm1.mp4" autoplay muted loop class="bg"></video>
  <RouterView />
  <FootBar />
</template>

<script setup lang="ts">
import FootBar from '@/components/footbar'
import TopBar from '@/components/topbar'
</script>

<style scoped lang="less">
.main {
  color: var(--primary-color);
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  height: 880px;
}
</style>
