import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  .content {
  }
`

export const HeaderLeft = styled.div`
  height: 70px;
  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999;
    float: left;
  }
  .active {
    background: #000;
    color: #fff;
  }

  .active .icon {
    position: absolute;
    display: inline-block;
    width: 12px;
    height: 7px;
    bottom: -1px;
    left: 50%;
    transform: translate(-50%, 0);
    background-position: -226px 0;
  }
`

export const HeaderRight = styled.div`
  .u-lstlay {
    position: absolute;
    z-index: 120;
    left: 0;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 7px #555;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
    top: 59px;
    width: 240px;
    color: #333;
    p {
      height: 17px;
      padding: 11px 10px;
      border-bottom: 1px solid #e2e2e2;
      box-sizing: content-box;
    }
    div.rap {
    }
    .pl-10px:hover {
      background: #e3e5e7;
      cursor: pointer;
    }
  }
`
