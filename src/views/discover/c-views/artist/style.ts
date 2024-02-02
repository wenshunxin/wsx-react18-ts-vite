import styled from 'styled-components'

import wrap2 from '@/assets/img/wrap2.png'

export const ArtistWrapper = styled.div`
  min-height: 700px;
  background: url(${wrap2}) repeat-y center center;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  .left {
    width: 180px;
    padding: 0 10px 40px;
    margin-top: 50px;
    h2 {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      color: #333;
    }
  }
  .right {
    width: 800px;
    padding: 40px;
    box-sizing: border-box;
  }
`
