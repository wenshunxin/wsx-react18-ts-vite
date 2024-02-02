export const getImgUrl = (url: string, x: number, y = x) => {
  return `${url}?param=${x}y${y}`
}

// 获取歌手字母类别
export function generateSingerAlpha() {
  const alphabets = ['-1']
  const start = 'A'.charCodeAt(0)
  const last = 'Z'.charCodeAt(0)
  for (let i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i))
  }

  alphabets.push('0')

  return alphabets
}

export const singerAlphas = generateSingerAlpha()
