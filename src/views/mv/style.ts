import styled from 'styled-components'

import WrapBg from '@/assets/img/player_bg.png'
export const MvWrapper = styled.div`
  margin-top: 5px;
  background: url(${WrapBg}) repeat-y;
  border-right: 1px solid #ccc;
  .left {
    padding: 47px 30px 40px 39px;
    width: 709px;
    .sprite_icon3 {
      background-position: -230px -480px;
    }
  }
`
