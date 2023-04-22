<template>
  <div class="top-bar">
    <div class="logo">
      <img src="@/assets/img/logo.webp" alt="" />
    </div>
    <div class="menu">
      <StarButton :nom="{ cprimary: val === '星语' }" @click="toggleFn"
        >星语</StarButton
      >
      <StarButton :nom="{ cprimary: val === '星颜' }" @click="toggleFn"
        >星颜</StarButton
      >
    </div>
    <div class="user">
      <div class="user-head"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StarButton from '@/components/button'

import bus from '@/utils/mitt'
import { ref } from 'vue'

const val = ref('星语')
const toggleFn = (e: Event) => {
  const value = (e.target as HTMLInputElement).innerText
  val.value = value
  bus.emit('toggles', val.value)
}
</script>

<style scoped lang="less">
.top-bar {
  width: 100%;
  height: 52px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 100px;
    padding-left: 20px;
    img {
      height: 18px;
    }
  }
  .menu {
    display: flex;
    justify-content: center;
  }
  .user {
    width: 100px;
    // padding-right: 20px;
    .user-head {
      border-radius: 50%;
      width: 36px;
      height: 36px;
      background-image: linear-gradient(180deg, #7be7ff 2%, #1e85e2);
    }
  }
}
</style>
