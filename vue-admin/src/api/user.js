import request from '@/utils/request'//引入axios

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data//请求的数据 传递的参数
  })
}

export function getInfo(token) {
  return request({
    url: '/info',
    method: 'get',
    params: { token }//这个传递的是参数
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
