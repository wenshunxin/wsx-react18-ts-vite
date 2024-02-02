import styled from 'styled-components'
import singer from '@/assets/img/singer.png'
export const ArtistWrapper = styled.div`
  .blk {
    margin: 5px 0 0;
    padding-top: 16px;
    border-top: 1px solid #d3d3d3;
    &:first-child {
      padding: 0;
      border: 0;
      margin: 0;
    }
    .tit {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      margin-bottom: 5px;
    }
    li {
      margin-bottom: 2px;
      width: 160px;
      height: 29px;
      line-height: 29px;
      a {
        display: block;
        width: 161px;
        padding-left: 27px;
        background: url(${singer}) no-repeat;
        background-position: 0 -30px;
        &.active {
          background-position: 0px 0px;
          color: rgb(194, 12, 12);
        }
      }
    }
  }
`
