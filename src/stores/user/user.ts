import { defineStore } from 'pinia'
import type { IIuser } from '../type'
import { signIp } from '@/service/api'

const useUserStore = defineStore('user', {
  state: (): IIuser => ({
    count: 0,
    user: ''
  }),
  actions: {
    increment() {
      this.count++
    },
    async getUser() {
      const res = await signIp()
      this.user = { id: res.ip }
    }
  }
})

export default useUserStore
