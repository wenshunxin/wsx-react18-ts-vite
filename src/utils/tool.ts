export const getImgUrl = (url: string, x: number, y = x) => {
  return `${url}?param=${x}y${y}`
}
