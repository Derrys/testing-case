import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/platform/api/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/platform/api/user/logout',
    method: 'post'
  })
}
