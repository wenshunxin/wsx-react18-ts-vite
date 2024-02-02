import styled from 'styled-components'

export const CatWrapper = styled.div`
  .alphas {
    width: 21px;
    line-height: 24px;
    text-align: center;
    font-size: 14px;
    color: #333;

    &:first-child,
    &:last-child {
      width: 45px;
      height: 24px;
    }
    &.active {
      background: #c20c0c;
      border-radius: 2px;
      color: #fff;
    }
  }
`
