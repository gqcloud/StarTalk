import Mock from 'mockjs'

export const note = Mock.mock({
  'data|19': [
    {
      moment: new Date(),
      'id|+1': 1,
      'userId+1': 10,
      'message|24-96': '@cword',
      'label|0-10': 0,
      name: '@cname',
      'like|0-120': 0,
      'comment|0-120': 0,
      'imgUrl|0-4': 0,
      'revoke|0-20': 0,
      'report|0-20': 0,
      type: 0
    }
  ]
})

export const comment = Mock.mock({
  'data|19': [
    {
      moment: new Date(),
      'id|+1': 1,
      'userId|+1': 10,
      'message|24-96': '@cword',
      name: '@cname',
      'imgUrl|0-13': 0
    }
  ]
})

export const cardColor = [
  'rgba(252,175,162,.3)',
  'rgba(252,227,148,.3)',
  'rgba(146,230,245,.3)',
  'rgba(160,237,138,.3)',
  'rgba(202,167,247,.3)',
  'rgba(212,212,212,.3)'
]

export const cardColor1 = [
  'rgba(252,175,162,1)',
  'rgba(252,227,148,1)',
  'rgba(146,230,245,1)',
  'rgba(160,237,138,1)',
  'rgba(202,167,247,1)'
]

export const photo = Mock.mock({
  'data|19': [
    {
      moment: new Date(),
      'id|+1': 1,
      'userId+1': 10,
      'message|24-96': '@cword',
      'label|0-10': 0,
      name: '@cname',
      'like|0-120': 0,
      'comment|0-120': 0,
      'imgUrl|0-5': 0,
      'revoke|0-20': 0,
      'report|0-20': 0,
      type: 1
    }
  ]
})
