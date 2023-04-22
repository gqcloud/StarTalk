<template>
  <div class="card-detail">
    <div class="bot">
      <p class="revoke">传信予星主灭掉此标签</p>
      <p class="report">密告</p>
    </div>
    <NoteCard :note="note" />
    <div class="form">
      <textarea class="msg" placeholder="请输入..."></textarea>
      <div class="bt">
        <input type="text" class="ipt" placeholder="签名" />
        <StarButton nom="primary">评论</StarButton>
      </div>
    </div>

    <div class="title">评论{{ comment.data.length }}</div>
    <div class="comment">
      <div class="comment-li" v-for="(item, i) in comment.data" :key="i">
        <div
          class="user-head"
          :style="{ background: portrait[item.imgUrl] }"
        ></div>
        <div class="comm-m">
          <div class="m-top">
            <p class="name">{{ item.name }}</p>
            <p class="time">{{ formatTime(item.time) }}</p>
          </div>
          <div class="mm">{{ item.message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StarButton from '@/components/button'
import NoteCard from '@/components/notecard'
import { comment } from '@/mock/index'
import { portrait } from '@/mock/data'
import { formatTime } from '@/utils/formatTime'

defineProps<{
  note: any
}>()
</script>

<style scoped lang="less">
.card-detail {
  .bot {
    display: flex;
    margin-bottom: 12px;
    .revoke {
      color: var(--primary-color);
      cursor: pointer;
      padding-right: 30px;
      font-size: var(--font-size-14);
    }
    .report {
      font-size: var(--font-size-14);
      color: var(--warning-color);
    }
  }
  .form {
    .msg {
      background: none;
      border: 1px solid rgba(148, 148, 148, 1);
      resize: none;
      padding: var(--padding-8);
      box-sizing: border-box;
      width: 100%;
      height: 56px;
      outline: none;
      margin-top: 12px;
      font-size: var(--font-size-12);
    }
    .bt {
      display: flex;
      align-items: center;
      margin-top: 6px;
    }
    .ipt {
      background: none;
      border: 1px solid rgba(148, 148, 148, 1);
      resize: none;
      padding: var(--padding-8);
      box-sizing: border-box;
      line-height: 20px;
      width: 200px;
      outline: none;
      font-size: var(--font-size-12);
    }
  }
  .title {
    font-weight: 600;
    padding-top: 30px;
    padding-bottom: 20px;
  }
  .comment-li {
    display: flex;
    padding-bottom: 30px;
    .user-head {
      flex: none;
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    .comm-m {
      padding-left: var(--padding-8);
      .m-top {
        display: flex;
        align-items: center;
        .name {
          font-weight: 600;
          font-size: var(--font-size-14);
        }
        .time {
          font-style: var(--font-size-12);
          padding-left: var(--padding-4);
          color: var(--gray-3);
          font-size: var(--font-size-12);
        }
      }
      .mm {
        padding-top: var(--padding-4);
        font-size: var(--font-size-14);
        color: var(--gray-2);
        line-height: 1.6;
      }
    }
  }
}
</style>
