import gqRequest from '..'

export function insertwallFn(insertInfo: any) {
  return gqRequest.post<any>({
    url: '/insertwall',
    data: insertInfo
  })
}

export function signIp() {
  return gqRequest.post<any>({
    url: '/insertwall/signip'
  })
}

export function findwallpageFn() {
  return gqRequest.post<any>({
    url: '/insertwall/findwallpage'
  })
}
