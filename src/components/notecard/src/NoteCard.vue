<template>
  <div
    class="note-card"
    :style="{ width: width, background: cardColor[note.imgUrl] }"
  >
    <div class="top">
      <p class="time">{{ formatTime(note.moment) }}</p>
      <p class="label">{{ label[note.type][note.label] }}</p>
    </div>
    <p class="message">
      {{ note.message }}
    </p>
    <div class="foot">
      <div class="foot-left">
        <i class="iconfont icon-aixin"></i>
        <i class="value1">{{ note.like }}</i>
        <i class="iconfont icon-liuyan"></i>
        <i class="value">{{ note.comment }}</i>
      </div>
      <div class="name">{{ note.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatTime } from '@/utils/formatTime'
import { label, cardColor } from '@/mock/data'
withDefaults(
  defineProps<{
    width?: string
    note: any
  }>(),
  {
    width: '288px',
    note: () => {}
  }
)
</script>

<style scoped lang="less">
.note-card {
  height: 240px;
  padding: 10px 20px 16px;
  box-sizing: border-box;
  position: relative;
  margin: 6px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
  }
  .top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    p {
      font-size: var(--font-size-12);
      color: var(--gray-3);
    }
  }
  .message {
    height: 140px;
    font-size: var(--font-size-14);
    font-family: 'Times New Roman', Times, serif;
    color: var(--gray-1);
    cursor: pointer;
    line-height: 1.8;
  }
  .foot {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    bottom: 16px;
    right: 0;
    padding: 0 var(--padding-20);
    .foot-left {
      i {
        font-size: var(--font-size-12);
        color: var(--gray-2);
        line-height: 16px;
        &.iconfont {
          padding-right: var(--padding-8);
          cursor: pointer;
        }
        &.icon-aixin {
          cursor: pointer;
          &:hover {
            color: var(--like-color);
          }
        }
        &.value1 {
          padding-right: var(--padding-8);
        }
      }
    }
    .name {
      font-size: var(--font-size-16);
      color: var(--gray-1);
      // font-weight: 600;
    }
  }
}
</style>
