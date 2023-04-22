<template>
  <div class="foot-bar">
    <div class="logo">
      <img src="" alt="" class="logo-img" />
      <p class="logo-name">StarTalk</p>
    </div>
    <div class="content">
      <p>
        声明……………………………… <br />
        &nbsp; &nbsp; &nbsp; ………………………………
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.foot-bar {
  width: 100%;
  height: 200px;
  background: var(--gray-1);
  display: flex;
  align-content: space-between;
  justify-content: center;
  .logo {
    display: flex;
    align-items: center;
    width: 300px;
    .logo-name {
      font-size: 20px;
      color: var(--gray-10);
      font-weight: 600;
      padding-left: 10px;
    }
  }
  .content {
    margin-top: 80px;
    color: var(--gray-10);
  }
}
</style>
