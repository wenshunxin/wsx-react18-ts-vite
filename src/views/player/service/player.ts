import hyRequest from '@/service'

export function getSongDetail(ids: number) {
  return hyRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return hyRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}

/**
 * 获取当前播放歌曲的详细信息
 */
export function getCurrentSongDetail(id: number) {
  return hyRequest.get({
    url: '/song/detail',
    params: {
      ids: id
    }
  })
}

/**
 * 获取包含这首歌的歌单
 */
export function getSimPlaylist(id: number) {
  return hyRequest.get({
    url: '/simi/playlist',
    params: {
      id: id
    }
  })
}

/**
 * 获取包含这首歌的歌单
 */
export function getSimSong(id: number) {
  return hyRequest.get({
    url: '/simi/song',
    params: {
      id: id
    }
  })
}
