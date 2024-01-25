import styled from 'styled-components'

interface IY {
  mousePositionY: number
  isLock: boolean
}

export const PlayerBarWrapper = styled.div<IY>`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  transform: ${({ mousePositionY, isLock }) =>
    `translateY(${mousePositionY > 50 && isLock ? 47 : 0}px)`};
  transition: transform 0.6s;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
    z-index: 9;
  }
  .lock {
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;
    &:hover {
      color: #333;
      cursor: pointer;
    }
    & > div {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
    }
    .lock_ {
      background-position: -80px -380px;
    }
    .lock_1 {
      background-position: -100px -400px;
    }
  }
`
import bg1 from '@/assets/img/progress_bar.png'
import bg2 from '@/assets/img/progress_bar.png'
import bg3 from '@/assets/img/sprite_icon.png'

export const BarControl = styled.div<{ isPlaying?: boolean }>`
  display: flex;
  align-items: center;
  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
  }

  .next {
    background-position: -80px -130px;
  }
`
export const BarPlayerInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${bg1}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${bg2}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -5px;
          background: url(${bg3}) 0 -250px;
          &::after {
            display: none !important;
          }
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

interface IPlayMode {
  playMode: number
}

export const BarOperator = styled.div<IPlayMode>`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
      & > div {
        position: absolute;
        bottom: 40px;
        clear: both;
        width: 32px;
        height: 113px;
        background: #2c2c2c;
        padding: 20px 0;
      }
    }

    .loop {
      background-position: ${(props) => {
        const { playMode } = props
        switch (playMode) {
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return '-3px -344px'
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
