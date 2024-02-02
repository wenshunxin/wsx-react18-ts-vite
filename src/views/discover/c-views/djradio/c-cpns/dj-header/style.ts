import styled from 'styled-components'

import radio_bg from '@/assets/img/radio_bg.png'
export const UlWrapper = styled.ul`
  display: flex;
  li {
    width: 90px;
    margin-bottom: 20px;
    a {
      background: url(${radio_bg}) no-repeat;
      display: block;
      width: 70px;
      height: 70px;
      background-position: 0 9999px;
      text-align: center;
      color: #888;
      & > div {
        width: 48px;
        height: 48px;
        margin: 2px auto 0;
        background-position: 0 0;
      }
      &:hover {
        background-position: 0 0;
      }
      &.active {
        background-position: -70px 0;
        color: #d35757;
        & > div {
          background-position: -48px 0;
        }
      }
    }
  }
`
