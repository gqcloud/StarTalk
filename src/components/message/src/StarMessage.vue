<template>
  <Transition name="down">
    <div class="star-message" v-if="isShow">
      <div class="star-m-i" >
        <i class="iconfont" :class="style[type].icon"></i>
        <span class="text">{{ message }}</span> 
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

withDefaults(
  defineProps<{
    message: string
    type: string
  }>(),
  {
    message: '',
    type: 'warn'
  }
)

const style = {
  warning: {
    icon: 'icon-warning'
  },
  error: {
    icon: 'icon-error'
  },
  success: {
    icon: 'icon-success'
  }
}

const isShow = ref(false)
onMounted(() => {
  isShow.value = true
  setTimeout(() => {
    isShow.value = false
  }, 3000)
})
</script>

<style scoped lang="less">
.down-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}
.down-enter-active {
  transition: all 0.3s;
}
.down-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
.down-leave-from {
  transform: translateY(0px);
  opacity: 1;
}
.down-leave-active {
  transition: all 0.3s;
}
.down-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
.star-message {
  width: 100%;
  height: 40px;
  position: fixed;
  z-index: 9999;
  top: 20px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  .star-m-i {
    padding: 0 20px;
    color: var(--gray-1);
    background: var(--gray-10);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
  i {
    margin-right: 6px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
}
.icon-success {
  color: var(--primary-color);
}
.icon-warning {
  color: var(--warning-color);
}
.icon-error {
  color: var(--error-color);
}
</style>
