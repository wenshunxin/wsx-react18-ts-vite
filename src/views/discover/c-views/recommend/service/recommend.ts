import hyRequest from '@/service'

export function getBanners() {
  return hyRequest.get({
    url: '/banner'
  })
}

export function getTopList() {
  return hyRequest.get({
    url: '/toplist'
  })
}

export function getTopListDetail(id: number) {
  return hyRequest.get({
    url: `/playlist/detail?id=${id}`
  })
}
