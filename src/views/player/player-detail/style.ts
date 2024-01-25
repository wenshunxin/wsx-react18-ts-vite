import styled from 'styled-components'

import player_bg from '@/assets/img/player_bg.png'

export const PlayerWrapper = styled.div`
  background-position: 0 0;
  background-repeat: repeat;
  background-color: #fff;
  background-image: url(${player_bg});
  .left {
    padding: 47px 30px 40px 39px;
    .cvr-wrap {
      width: 206px;
      .u-cover-6 {
        width: 206px;
        height: 205px;
        background-position: -140px -580px;
        img {
          border-radius: 50%;
        }
      }
      .sprite_icon2 {
        width: 16px;
        height: 16px;
        background-position: -34px -863px;
      }
    }
    .cnt {
      .u-icn-37 {
        width: 54px;
        height: 24px;
        background-position: 0 -463px;
      }
    }
  }
  .right {
    padding: 20px 40px 40px 30px;
  }
  a {
    color: #0c73c2;
  }
`
