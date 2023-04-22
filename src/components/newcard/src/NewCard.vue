<template>
  <div class="new-card">
    <div class="colors" v-show="id === 0">
      <template v-for="(item, i) in cardColor" :key="i">
        <p
          class="color-li"
          :style="{ background: item }"
          :class="{ colorSelect: currentIndex === i }"
          @click="checkColorFn(i)"
        ></p>
      </template>
    </div>
    <template v-if="id === 1">
      <div class="avatar" :class="{ activeImg: isOpen }">
        <i class="iconfont icon-add"></i>
        <input type="file" class="ipt" ref="iptRef" multiple @change="upload" />
      </div>
      <div class="uploadImg" :class="{ activeImg: !isOpen }">
        <img :src="imgs" alt="" class="img" />
        <div class="icon" @click="upload">
          <i class="iconfont icon-xiugai"></i>
        </div>
      </div>
    </template>
    <div
      class="card-main"
      :style="{ background: id !== 0 ? '' : cardColor[currentIndex] }"
    >
      <textarea placeholder="星遗..." class="msg" v-model="message"></textarea>
      <input type="text" placeholder="星印" class="ipt" v-model="name" />
    </div>
    <div class="labels">
      <p class="title">选择标签</p>
      <template v-for="(item, i) in label[id]" :key="i">
        <p
          class="label-item"
          :class="{ labelActive: labelIndex === i }"
          @click="labelActiveFn(i)"
        >
          {{ item }}
        </p>
      </template>
    </div>
    <div class="illustrate">
      <p class="title">免责说明</p>
      <p class="info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
        reprehenderit：<br />
        1、Lorem ipsum dolor sit amet consectetur adipisici <br />
        2、Lorem ipsum dolor sit amet consectetur adipisici<br />
        3、Lorem ipsum dolor sit amet consectetur adipisici<br />
        5、Lorem ipsum dolor sit amet consectetur adipisici<br />
        6、Lorem ipsum dolor sit amet consectetur adipisici<br />
        7、Lorem ipsum dolor sit amet consectetur adipisici<br />
        8、Lorem ipsum dolor sit amet consectetur adipisici<br />
        9、Lorem ipsum dolor sit amet consectetur adipisici<br />
      </p>
    </div>
    <div class="foot">
      <StarButton nom="csecondary" @click="closeModalFn">星弃</StarButton>
      <StarButton nom="primary" size="max" @click="submit">星存</StarButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cardColor } from '@/mock'
import { getCurrentInstance, onMounted, ref } from 'vue'
import { label } from '@/mock/data'
import StarButton from '@/components/button'
import { getFileContent } from '@/utils/getImg'
import useUserStore from '@/stores/user/user'
import { insertwallFn } from '@/service/api'

const props = defineProps<{
  id: number
}>()

const store = useUserStore()

const currentIndex = ref(0)
const checkColorFn = (i: number) => {
  currentIndex.value = i
}
const labelIndex = ref(0)
const labelActiveFn = (i: number) => {
  labelIndex.value = i
}
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'newCard', card: any): void
}>()
const closeModalFn = () => {
  emit('close')
}

const iptRef = ref()
const isOpen = ref(false)
let imgs = ref()
const upload = () => {
  const aa = getFileContent(iptRef.value.files[0])
  imgs.value = aa
  isOpen.value = aa ? true : false
}

const message = ref('')
const name = ref('')
const apps = getCurrentInstance()

const submit = async () => {
  const res = await insertwallFn({
    type: props.id,
    message: message.value,
    name: name.value,
    userId: store.user.id,
    label: labelIndex.value,
    color: currentIndex.value,
    imgUrl: ''
  })
  message.value = ''
  emit('newCard', res)
  apps?.appContext.config.globalProperties.$message({
    message: 'ss',
    type: 'success'
  })
}
onMounted(() => {})
</script>

<style scoped lang="less">
.new-card {
  .avatar {
    position: relative;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid var(--gray-3);
    margin-bottom: 20px;
    cursor: pointer;
    .iconfont {
      font-size: 20px;
      cursor: pointer;
    }
    .ipt {
      position: absolute;
      left: 0;
      top: 0;
      width: 50px;
      height: 50px;
      // visibility: hidden;
      opacity: 0;
      cursor: pointer;
    }
  }
  .activeImg {
    display: none;
  }
  .uploadImg {
    position: relative;
    width: 100%;
    height: 200px;
    margin-bottom: 12px;
    // mx
    .img {
      width: 100%;
      height: 100%;
    }
    .icon {
      position: absolute;
      left: 12px;
      top: 12px;
      width: 40px;
      height: 40px;
      background: rgba(143, 135, 135, 0.3);
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      .icon-xiugai {
        color: var(--gray-10);
      }
    }
  }

  .colors {
    height: 36px;
    .color-li {
      width: 24px;
      height: 24px;
      margin-right: var(--padding-8);
      float: left;
      cursor: pointer;
    }
    .colorSelect {
      border: 1px solid var(--primary-color);
    }
  }
  .card-main {
    width: 100%;
    height: 240px;
    padding: 12px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    .msg {
      background: none;
      border: none;
      resize: none;
      width: 100%;
      padding: var(--padding-8);
      box-sizing: border-box;
      height: 172px;
      outline: none;
      font-size: var(--font-size-14);
    }
    .ipt {
      width: 100%;
      height: 36px;
      line-height: 20;
      box-sizing: border-box;
      padding: var(--padding-8);
      background: none;
      border: 1px #fff solid;
      outline: none;
      text-align: right;
      font-size: var(--font-size-12);
    }
  }
  .labels {
    overflow: hidden;
    .title {
      color: var(--gray-1);
      font-weight: 600;
      padding-top: 30px;
      font-size: var(--font-size-14);
    }
    .label-item {
      float: left;
      padding: 4px 10px;
      border-radius: 24px;
      margin: 16px var(--padding-4) 0 0;
      cursor: pointer;
      color: var(--gray-2);
      font-size: var(--font-size-14);
    }
    .labelActive {
      background: #ebebeb;
    }
  }
  .illustrate {
    .title {
      color: var(--gray-1);
      font-weight: 600;
      padding-top: 40px;
      padding-bottom: 20px;
      font-size: var(--font-size-14);
    }
    .info {
      color: var(--gray-3);
      font-size: var(--font-size-12);
      line-height: 2;
    }
  }
  .foot {
    width: 100%;
    padding: var(--padding-20) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 52px;
    left: 0;
    right: 0;
    box-sizing: border-box;
    background-color: var(--gray-10);
    // z-index: 9999;
  }
}
</style>
