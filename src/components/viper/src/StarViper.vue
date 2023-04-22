<template>
  <Transition name="view">
    <div class="viper" v-if="isViper">
      <div class="bg"></div>
      <div class="viper-photo">
        <img
          :src="getImageUrl('../../../assets/img/' + allPhotos[num] + '.jpeg')"
          alt=""
        />
      </div>
      <div class="switch left" @click="changeImg(0)" v-show="num > 0">
        <i class="iconfont icon-left"></i>
      </div>
      <div
        class="switch right"
        @click="changeImg(1)"
        v-show="num < allPhotos.length - 1"
      >
        <i class="iconfont icon-right"></i>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
// import getImageUrl from '@/utils/getImg'

withDefaults(
  defineProps<{
    isViper: boolean
    allPhotos: any
    num: number
  }>(),
  {
    isViper: false,
    allPhotos: () => [],
    num: 0
  }
)

const emit = defineEmits<{
  (e: 'toggleImg', imgId: number): void
}>()

const changeImg = (i: number) => {
  emit('toggleImg', i)
}

function getImageUrl(url: string) {
  return new URL(url, import.meta.url).href
}
</script>

<style scoped lang="less">
.view-enter-from {
  opacity: 0;
}
.view-enter-active {
  transition: all 0.3s ease-out;
}
.view-enter-to {
  opacity: 1;
}
.view-leave-from {
  opacity: 1;
}
.view-leave-active {
  transition: all 0.3s ease-out;
}
.view-leave-to {
  opacity: 1;
}
.viper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    height: 100%;
    width: 100%;
  }
  .viper-photo {
    position: absolute;
    padding: 600px 450px 0px 80px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .switch {
    position: absolute;
    top: 50%;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--gray-3);
    color: var(--gray-10);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.3s ease;
    .iconfont {
      font-size: 24px;
    }
    &:hover {
      opacity: 1;
    }
  }
  .left {
    left: 15px;
  }
  .right {
    right: 390px;
  }
}
</style>
