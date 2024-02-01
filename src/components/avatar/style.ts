import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  .album {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #000;
    position: relative;
    cursor: pointer;
    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: all 0.3s;
    }
    &::before {
      background: rgba(0, 0, 0, 0.5);
    }
    &::after {
      background: inherit;
      clip-path: circle(0% at 50% 50%);
    }
    &:hover::after {
      clip-path: circle(50% at 50% 50%);
    }
  }
`
