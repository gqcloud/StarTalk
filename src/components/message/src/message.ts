import { h, render } from 'vue'
import StarMessage from '..'

const divNode = h('div', { class: 'xx-message-container' })
render(divNode, document.body)
const div = divNode.el

const StartMessage = ({ message, type }) => {
  const comVnode = h(StarMessage, { message, type })
  render(comVnode, div)
  setTimeout(() => {
    render(null, div)
  }, 6000)
}

export default StartMessage
