import styled from 'styled-components'

export const AlbumItemWrap = styled.li`
  width: 153px;
  height: 178px;
  padding: 0 0 30px 33px;
  box-sizing: content-box;
  position: relative;
  div.sprite_cover {
    display: block;
    width: 153px;
    height: 130px;
    background-position: 0 -845px;
  }
  .w-130px:hover {
    a.sprite_icon {
      display: block;
    }
  }
  p.line-clamp-1 {
    margin: 8px 0 3px;
    font-size: 14px;
  }
  a.sprite_icon {
    display: none;
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 28px;
    height: 28px;
    background-position: 0 -140px;
  }
`
