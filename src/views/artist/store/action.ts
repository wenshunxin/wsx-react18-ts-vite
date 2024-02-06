import hyRequest from '@/service'

/**
 * 获取歌手详情
 */
export const getArtistDetailApi = (id: number) =>
  hyRequest.get({ url: `/artist/detail?id=${id}` })
