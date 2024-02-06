import styled from 'styled-components'

export const PlayingWrapper = styled.div`
  width: 20px;
  height: 18px;
  overflow: hidden;
  display: flex;

  .column {
    width: 2px;
    height: 100%;
    margin-left: 2px;
    background-color: #c20c0c;
    -webkit-animation: play 0.9s linear infinite alternate;
    animation: play 0.9s linear infinite alternate;
  }
  .column:nth-child(1) {
    animation-delay: -1.2s;
  }
  .column:nth-child(3) {
    animation-delay: -1.5s;
  }
  .column:nth-child(4) {
    animation-delay: -0.9s;
  }
  .column:nth-child(5) {
    animation-delay: -0.6s;
  }

  @keyframes play {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    to {
      -webkit-transform: translateY(75%);
      transform: translateY(75%);
    }
  }
`
