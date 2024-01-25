import styled from 'styled-components'
import wrap_bg3 from '@/assets/img/wrap_bg3.png'

export const RecommendWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    border-bottom: none;
    width: 980px;
    background-image: url(${wrap_bg3});
    display: flex;
    > .left {
      margin-top: 40px;
    }
    > .right {
      margin-left: 1px;
    }
  }
  .currentPlaySong {
    background-color: var(--primary-color);
    color: #fff;
  }
  .ant-table-cell-row-hover {
    color: rgba(0, 0, 0, 0.88);
  }
`
