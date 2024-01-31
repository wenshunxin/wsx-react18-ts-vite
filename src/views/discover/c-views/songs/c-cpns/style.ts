import styled from 'styled-components'

import sltlyr from '@/assets/img/sltlyr.png'

interface IStyle {
  isShowPullDown: boolean
}

export const PullDownWrap = styled.div<IStyle>`
  top: 43px;
  display: ${(props) => (props.isShowPullDown ? 'block' : 'none')};
  z-index: 99;
  .top {
    height: 32px;
    background: url(${sltlyr}) no-repeat;
    i {
      position: absolute;
      top: 2px;
      left: 104px;
      display: inline-block;
      width: 24px;
      height: 11px;
      background-position: -48px 0;
      vertical-align: middle;
    }
  }
  .bottom {
    padding: 0 10px;
    box-sizing: border-box;
    background-repeat: repeat-y;
    background: url(${sltlyr});
    background-position: -720px 0;
    h3 {
      height: 37px;
      padding-left: 26px;
      border-bottom: 1px solid #e6e6e6;
      font-weight: normal;
      i {
        width: 75px;
        height: 26px;
        background-position: 0 -64px;
        text-align: center;
        line-height: 26px;
      }
    }
    & > div > div:last-child {
      padding-bottom: 25px;
    }
  }
  .ft {
    height: 20px;
    background: url(${sltlyr});
    background-position: -1440px -12px;
  }
`
