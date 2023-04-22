<template>
  <div class="wall">
    <p class="title">{{ wallType[id].name }}</p>
    <p class="slogan">{{ wallType[id].slogan }}</p>
    <div class="label">
      <div
        class="label-title"
        :class="{ active: isSele === -1 }"
        @click="isSele = -1"
      >
        全部
      </div>
      <template v-for="(item, i) in label[id]" :key="i">
        <p
          class="label-title label-item"
          @click="selectFn(i)"
          :class="{ active: isSele === i }"
        >
          {{ item }}
        </p>
      </template>
    </div>
    <div class="card" v-show="ids === '星语'">
      <template v-for="(item, i) in card" :key="i">
        <NoteCard
          :note="item"
          :class="{ cardSelect: cardIndex === i }"
          @click="selestCard(i)"
        />
      </template>
      <div class="flexs"></div>
      <div class="flexs"></div>
      <div class="flexs"></div>
    </div>
    <div class="photo" v-show="ids === '星颜'">
      <template v-for="(item, i) in photo.data" :key="i">
        <PhotoCard :photo="item" @click="selestCard(i)" />
      </template>
    </div>
    <!-- <div class="none-msg" v-if="isOk !== 0">
      <img src="" alt="" />
      <p>{{ none[id].msg }}</p>
    </div> -->
    <div class="loading" v-show="isOk == -1">
      <div id="lottie" ref="lottieRef"></div>
      <p>加载中</p>
    </div>
    <p class="bottom-tip" v-show="isOk === 2">没有更多～</p>
    <div class="add" :style="{ bottom: btm + 'px' }" @click="showModalFn">
      <i class="iconfont icon-add"></i>
    </div>
    <StarModal :title="title" :is-modal="modal" @notice-close="noticeClose">
      <NewCard
        @close="close"
        v-show="cardIndex === -1"
        :id="id"
        @new-card="newCard"
      />
      <CardDetail v-show="cardIndex !== -1" :note="card[targetCard]" />
    </StarModal>
    <StarViper
      :is-viper="isViper"
      :allPhotos="allPhotos"
      :num="targetCard"
      @toggle-img="toggleImg"
    />
  </div>
</template>

<script setup lang="ts">
import { wallType, label, none } from '@/mock/data'
import { computed, nextTick, ref } from 'vue'
import NoteCard from '@/components/notecard'
import { note, photo } from '@/mock'
import useScroll from '@/utils/watchScrollTop'
import StarModal from '@/components/modal'
import NewCard from '@/components/newcard'
import CardDetail from '@/components/carddetail'
import bus from '@/utils/mitt'
import PhotoCard from '@/components/photocard'
import StarViper from '@/components/viper'
import lottie from 'lottie-web'
import loading from '@/assets/img/loading.json'
import { findwallpageFn } from '@/service/api'

const isOk = ref(-1)
const card = computed(() => {
  return note.data
})
const title = computed(() => {
  return cardIndex.value !== -1 ? '星情' : '写星语'
})
const isSele = ref(-1)
const selectFn = (i: number) => {
  isSele.value = i
}

const btm = useScroll()

const modal = ref(false)
const noticeClose = () => {
  modal.value = false
  cardIndex.value = -1
  isViper.value = false
}
const showModalFn = () => {
  modal.value = true
}
const close = () => {
  modal.value = false
}

const cardIndex = ref(-1)

const targetCard = ref(0)
const selestCard = (i: number) => {
  cardIndex.value = i
  targetCard.value = i
  modal.value = true
  if (id.value === 1) {
    isViper.value = true
  }
}

const id = ref(0)
const ids = ref('星语')
const isViper = ref(false)
bus.on('toggles', (e: any) => {
  ids.value = e
  if (e === '星语') {
    id.value = 0
    isViper.value = false
    modal.value = false
  } else {
    id.value = 1
    modal.value = false
  }
})

const allPhotos = computed(() => {
  let lists = []
  for (const item of photo.data) {
    lists.push(item.imgUrl)
  }
  return lists
})

const toggleImg = (imgId: number) => {
  if (imgId === 0) {
    targetCard.value--
  } else {
    targetCard.value++
  }
}

const newCard = (card: any) => {
  console.log(card)
}

const lottieRef = ref()
// const loadings = () => {
//   if (isOk.value == -1) {
//     nextTick(async () => {
//       const param = {
//         container: lottieRef.value,
//         render: 'svg',
//         loop: true,
//         autoplay: true,
//         animationData: loading
//       }
//       lottie.loadAnimation(param)
//     })
//   }
// }
// loadings()

// getWallCard()
// async function getWallCard() {
//   const res = await findwallpageFn()
//   console.log(res)
// }
</script>

<style scoped lang="less">
.wall {
  padding-top: 52px;

  .title {
    padding-top: 48px;
    padding-bottom: var(--padding-8);
    font-size: 56px;
    color: var(--gray-1);
    text-align: center;
    font-weight: 600;
  }
  .slogan {
    color: var(--gray-2);
    text-align: center;
    margin-top: var(--padding-20);
  }
  .label {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .label-title {
      display: flex;
      align-items: center;
      line-height: 30px;
      padding: 0 14px;
      height: 30px;
      margin: var(--padding-4);
      color: var(--gray-2);
      box-sizing: border-box;
      cursor: pointer;
    }
    .active {
      border: 1px solid var(--gray-1);
      color: var(--gray-1);
      font-weight: 600;
      border-radius: 14px;
    }
  }
  .card {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .cardSelect {
      border: 1px solid var(--primary-color);
    }
    .flexs {
      width: 288px;
    }
  }
  .add {
    width: 56px;
    height: 56px;
    background: var(--gray-1);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
    border-radius: 28px;
    position: fixed;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;
    i {
      color: var(--gray-10);
      font-size: 23px;
    }
  }
  .photo {
    width: 88%;
    margin: 0 auto;
    margin-top: 20px;
    columns: 5;
    padding-bottom: 50px;
    column-gap: var(--padding-4);
  }
  .none-msg {
    width: 100%;
    text-align: center;
    padding-top: 80px;
    position: absolute;
    top: 280px;
    img {
      display: inline;
    }
    p {
      font-weight: 700;
      font-size: 24px;
      color: var(--gray-3);
    }
  }
  .loading {
    text-align: center;
    width: 100%;
    p {
      margin-top: -50px;
      font-size: 24px;
      color: var(--gray-3);
    }
    #lottie {
      margin-top: 20px;
      height: 200px;
    }
  }
  .bottom-tip {
    text-align: center;
    color: var(--gray-3);
    padding: 20px;
  }
}
</style>
