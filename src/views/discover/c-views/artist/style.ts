import styled from 'styled-components'

interface IStyle {
  n: number
}

const n = 6
const p = 360 / n
console.log(p)
export const ArtistWrapper = styled.div<IStyle>`
  .content {
    width: 300px;
    height: 300px;
    outline: 1px solid #000;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: self-start;
    border-radius: 50%;
    animation: identifier linear infinite 10s;
    background: #fff;
    .item {
      width: 80px;
      height: 80px;
      position: absolute;
      margin-top: -40px;
      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: identifier linear infinite 10s reverse;
        background: url(https://api.dicebear.com/7.x/miniavs/svg?seed=1);
      }
    }

    .item {
      transform-origin: center 190px;
    }
    /* @for $i from 1 through $n {
      .item:nth-child(#{$i}) {
        transform: rotate($i * $pDeg);
      }
    } */
    .item:nth-child(1) {
      transform: rotate(60deg);
      .avatar {
        --initDeg: 60deg;
        transform: rotate(-60deg);
        div {
          width: 200px;
        }
      }
    }
    .item:nth-child(2) {
      transform: rotate(120deg);
      .avatar {
        --initDeg: 120deg;
        transform: rotate(-120deg);
      }
    }
    .item:nth-child(3) {
      transform: rotate(180deg);
      .avatar {
        --initDeg: 180deg;
        transform: rotate(-180deg);
      }
    }
    .item:nth-child(4) {
      transform: rotate(240deg);
      .avatar {
        --initDeg: 240deg;
        transform: rotate(-240deg);
      }
    }
    .item:nth-child(5) {
      transform: rotate(300deg);
      .avatar {
        --initDeg: 300deg;
        transform: rotate(-300deg);
      }
    }
    .item:nth-child(6) {
      transform: rotate(360deg);
      .avatar {
        --initDeg: 360deg;
        transform: rotate(-360deg);
      }
    }
  }

  @keyframes identifier {
    to {
      transform: rotate(calc(360deg - var(--initDeg, 0deg)));
    }
  }
`
