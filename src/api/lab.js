import request from '@/plugin/axios'

export function getLabData () {
  return request({
    url: 'lab',
    method: 'get'
  })
}

export function getLabType () {
  return request({
    url: 'lab/gettype',
    method: 'get'
  })
}

export function addLab (data) {
  return request({
    url: 'admin/lab/add',
    method: 'post',
    data
  })
}

export function updateLab (labid, data) {
  return request({
    url: 'admin/lab/update/' + labid,
    method: 'post',
    data
  })
}

export function deleteLab (labid) {
  return request({
    url: 'admin/lab/delete/' + labid,
    method: 'post'
  })
}

export function getAllReserve () {
  return request({
    url: 'admin/reserve/list',
    method: 'get'
  })
}

export function getReserveDetail (id) {
  return request({
    url: 'admin/reserve/detail/' + id,
    method: 'get'
  })
}
