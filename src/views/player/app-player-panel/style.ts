import styled from 'styled-components'

export const PlayMenuWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 46px;
  _bottom: 46px;
  width: 986px;
  _width: 982px;
  height: 301px;
  margin-left: -493px;
  cursor: pointer;
  overflow: hidden;
  z-index: 9999;
  .listhd:first-child {
    background-position: 0 0;
    height: 41px;
  }
  .listhd:last-child {
    height: 260px;
    overflow: hidden;
    background-position: -1014px 0;
    background-repeat: repeat-y;
  }

  .col-1 {
    width: 20px;
    span {
      display: block;
      margin-left: 10px;
      width: 10px;
      height: 13px;
      background-position: -182px 0;
    }
  }

  .overflow-y-auto,
  .overflow-y-scroll {
    ::-webkit-scrollbar {
      width: 6px; /* 设置滚动条的宽度 */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #868686; /* 设置滚动条滑块的颜色 */
      border-radius: 5px; /* 设置滚动条滑块的圆角 */
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* 设置滚动条滑块在悬停时的颜色 */
    }

    ::-webkit-scrollbar-track {
      background-color: #000; /* 设置滚动条背景的颜色 */
    }
  }
  .overflow-y-scroll {
    ::-webkit-scrollbar {
      width: 0px; /* 设置滚动条的宽度 */
    }
  }
`
