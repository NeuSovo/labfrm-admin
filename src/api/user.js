import request from '@/plugin/axios'

export function getAllUser (page, limit) {
  return request({
    url: `admin/user/list?page=${page}&limit=${limit}`,
    method: 'get'
  })
}

export function updateUser (uid, data) {
  return request({
    url: 'admin/user/update/' + uid,
    method: 'post',
    data
  })
}

export function deleteUser (uid) {
  return request({
    url: 'admin/user/delete/' + uid,
    method: 'post'
  })
}

export function deleteWhiteList (uid) {
  return request({
    url: 'admin/user/white/delete/' + uid,
    method: 'post'
  })
}

export function addWhiteList (uid) {
  return request({
    url: 'admin/user/white/add/' + uid,
    method: 'post'
  })
}

export function getAllWhiteList () {
  return request({
    url: 'admin/user/white/list',
    method: 'get'
  })
}
