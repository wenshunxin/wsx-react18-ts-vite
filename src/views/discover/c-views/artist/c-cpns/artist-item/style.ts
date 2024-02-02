import styled from 'styled-components'

export const LiWrapper = styled.li`
  width: 130px;
  height: 154px;
  padding: 0 0 30px 50px;
  padding-left: 17px;
  box-sizing: content-box;
  a {
    .sprite_icon2 {
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
      float: right;
    }
  }
  &.line {
    border-bottom: 1px dotted #999;
    margin-bottom: 12px;
  }
  &.smi {
    height: 30px;
    width: 130px;
    padding-bottom: 0;
  }
`
