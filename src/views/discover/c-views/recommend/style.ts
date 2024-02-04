import styled from 'styled-components'
import wrap_bg3 from '@/assets/img/wrap_bg3.png'
import wrap1 from '@/assets/img/wrap1.png'

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

  .rec-content {
    background: url(${wrap1}) repeat-y;
    min-height: 700px;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    .left {
      padding: 20px 20px 40px;
    }
  }
`
