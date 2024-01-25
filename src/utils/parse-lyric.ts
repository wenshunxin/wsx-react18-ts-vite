export interface ILyrics {
  time: number
  text: string
}
const timeRegex = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyrics(lyricString: string) {
  const lyric: ILyrics[] = []
  // 实现歌词解析的逻辑
  const lineStrings: string[] = lyricString.split('\n')
  lineStrings.pop() // 去除最后一个空行
  for (const line of lineStrings) {
    const result = timeRegex.exec(line)
    if (!result) continue
    const time1 = Number(result[1]) * 60 * 1000
    const time2 = Number(result[2]) * 1000
    const time3 =
      result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10
    const time = time1 + time2 + time3
    const text = line.replace(timeRegex, '').trim()
    lyric.push({ time, text })
  }
  return lyric
}

export function scrollTo(element: any, to: number, duration: number) {
  if (duration <= 0 || element == undefined) return
  const difference = to - element.scrollTop
  const perTick = (difference / duration) * 10

  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 20)
  }, 10)
}
