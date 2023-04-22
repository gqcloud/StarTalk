<template>
  <Transition name="starModal">
    <div class="modal" v-show="isModal">
      <div class="modal-head">
        <p class="name">{{ title }}</p>
        <i class="iconfont icon-close" @click="closeFn"></i>
      </div>
      <div class="modal-main">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    isModal: boolean
  }>(),
  {
    isModal: false
  }
)
const emit = defineEmits<{
  (e: 'noticeClose'): void
}>()
const closeFn = () => {
  emit('noticeClose')
}
</script>

<style scoped lang="less">
.starModal-enter-from {
  transform: translateX(360px);
}
.starModal-enter-active {
  transition: all 0.3s;
}
.starModal-enter-to {
  transform: translateX(0);
}
.starModal-leave-from {
  transform: translateX(0);
}
.starModal-leave-active {
  transition: all 0.3s;
}
.starModal-leave-to {
  transform: translateX(360px);
}
.modal {
  width: 360px;
  height: 100%;
  position: fixed;
  right: 0;
  top: 52px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  padding: var(--padding-20);
  box-sizing: border-box;
  .modal-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    .name {
      font-size: 16px;
      color: var(--gray-1);
      font-weight: 600;
    }
    .icon-close {
      color: var(--gray-2);
      cursor: pointer;
    }
  }
  .modal-main {
    height: 500px;
    overflow-y: auto;
  }
}
</style>
