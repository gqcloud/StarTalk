import StartMessage from '@/components/message/src/message'
import type { App } from 'vue'
export default {
  install(app: App) {
    app.config.globalProperties.$message = StartMessage
  }
}
