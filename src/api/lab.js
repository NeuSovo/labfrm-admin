import request from '@/plugin/axios'

export function getLabData () {
  return request({
    url: 'lab?s=1',
    method: 'get'
  })
}

export function getLabDetail (labid) {
  return request({
    url: 'lab/detail/' + labid,
    method: 'get'
  })
}

export function updateLabDetail (labid, data) {
  return request({
    url: 'admin/lab/detail/update/' + labid,
    method: 'post',
    data
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

export function getAllReserve (status, page, limit) {
  return request({
    url: `admin/reserve/list?status=${status}&page=${page}&limit=${limit}`,
    method: 'get'
  })
}

export function getReserveDetail (id) {
  return request({
    url: 'admin/reserve/detail/' + id,
    method: 'get'
  })
}

export function updateReserveDetail (id, data) {
  return request({
    url: 'admin/reserve/update/' + id,
    method: 'post',
    data
  })
}

export function reviewReserve (id, status) {
  return request({
    url: 'admin/reserve/review/' + id + '/' + status,
    method: 'post'
  })
}

export function deleteLabDetailImage (id, data) {
  return request({
    url: 'admin/lab/detail/image/delete/' + id,
    method: 'post',
    data
  })
}
