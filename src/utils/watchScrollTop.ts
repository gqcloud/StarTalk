import { onMounted, onUnmounted, ref } from 'vue'

export default function useScroll() {
  const btm = ref(30)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)
  const scrollListen = () => {
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    clientHeight.value = document.documentElement.clientHeight
    if (clientHeight.value + scrollTop.value + 230 >= scrollHeight.value) {
      btm.value =
        scrollTop.value + clientHeight.value + 230 - scrollHeight.value
    } else {
      btm.value = 30
    }
  }
  onMounted(() => {
    window.addEventListener('scroll', scrollListen)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListen)
  })
  return btm
}
