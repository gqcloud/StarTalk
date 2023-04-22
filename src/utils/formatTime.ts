import dayjs from 'dayjs'

export function formatTime(time: string, fm: string = 'YYYY/MM/DD HH:mm:ss') {
  return dayjs().format(fm)
}
