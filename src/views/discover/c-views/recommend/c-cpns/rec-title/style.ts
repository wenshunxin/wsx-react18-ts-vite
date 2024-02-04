import styled from 'styled-components'

import indexBg from '@/assets/img/index.png'
export const ResTitleWrapper = styled.div`
  height: 33px;
  padding: 0px 10px 0px 34px;
  background: url(${indexBg}) no-repeat;
  background-position: -225px -156px;
  border-bottom: 2px solid rgb(193, 13, 12);
  .tit {
    line-height: 28px;
    font-size: 20px;
  }
  i {
    background: url(${indexBg}) no-repeat;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
    background-position: 0px -240px;
  }
`
