import request from '@/http'

export function Login(params: any) {
  return request({
    url: '/system/login',
    method: 'post',
    data: params,
  })
}

export function getPage(params: any) {
  return request({
    url: '/lowcode/datasource/page?limit=10&page=1',
    method: 'get',
  })
}
