<template>
  <div class="photos">
    <!-- {{ photo.imgUrl }} -->
    <img
      :src="getImageUrl('../../../assets/img/' + photo.imgUrl + '.jpeg')"
      alt=""
    />
    <div class="photo-bg"></div>
    <div class="photo-like">
      <i class="iconfont icon-aixin"></i>
      <i class="like-data">{{ photo.like }}</i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cardColor, label } from '@/mock/data'

defineProps<{
  photo: any
}>()

function getImageUrl(url: string) {
  return new URL(url, import.meta.url).href
}
</script>

<style scoped lang="less">
.photos {
  position: relative;
  margin-bottom: var(--padding-4);
  // break-inside: avoid;
  img {
    width: 100%;
  }
  .photo-bg {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s;
  }
  .photo-like {
    position: absolute;
    left: var(--padding-8);
    top: var(--padding-8);
    background: var(--gray-10);
    border-radius: 20px;
    height: 28px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: all 0.3s;
    .icon-aixin {
      color: var(--gray-3);
      padding-right: var(--padding-4);
    }
    .like-data {
      color: var(--gray-1);
    }
  }
  &:hover .photo-bg {
    opacity: 1;
    cursor: pointer;
  }
  &:hover .photo-like {
    opacity: 1;
    cursor: pointer;
  }
}
</style>
