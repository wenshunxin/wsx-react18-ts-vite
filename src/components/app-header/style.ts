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

export const HeaderRight = styled.div``
