import styled from 'styled-components'

export const RankWrapper = styled.div`
  .py-10px:hover {
    i.sprite_icon {
      display: block !important;
    }
  }
  .rank {
    width: 47px;
    margin: 6px 0 0 0;
    text-align: center;
    line-height: normal;

    em {
      display: block;
      font-style: normal;
      font-size: 14px;
    }
    i {
      width: 6px;
      height: 6px;
      margin-right: 2px;
    }
    span.u-icn-72 {
      color: #999;
      i {
        background-position: -74px -274px;
      }
    }

    span.u-icn-73 {
      color: #ba2226;
      i {
        background-position: -74px -304px;
      }
    }
    span.u-icn-74 {
      color: #4abbeb;
      i {
        background-position: -74px -324px;
      }
    }
    span.u-icn-75 {
      i {
        width: 16px;
        height: 17px;
        background-position: -67px -283px;
      }
    }
    span {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .u-hot {
    width: 100px;
    height: 8px;
    background-position: 0 -240px;
    a {
      height: 8px;
      background-position: right -318px;
      i {
        margin-left: -4px;
        padding: 0 0 0 4px;
        background-position: 0 -304px;
        width: 100%;
        height: 100%;
      }
    }
  }
`
