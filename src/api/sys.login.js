import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: 'auth/admin/login ',
    method: 'post',
    data
  })
}
