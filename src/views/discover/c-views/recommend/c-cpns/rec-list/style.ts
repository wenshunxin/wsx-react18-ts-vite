import styled from 'styled-components'

import index_bill from '@/assets/img/index_bill.png'
import index from '@/assets/img/index.png'
export const ListWrapper = styled.div`
  .content {
    margin-top: 20px;
    height: 472px;
    background: url(${index_bill});
    .blk {
      width: 230px;
      height: 472px;
      .top {
        height: 100px;
        padding: 20px 0px 0px 19px;
        /* box-sizing: ; */
        margin-bottom: 20px;
      }
    }
  }

  .index {
    background: url(${index}) no-repeat 0 9999px;
    display: block;
    width: 22px;
    height: 22px;
    margin-right: 10px;
    text-indent: -9999px;
  }
  .ply {
    background-position: -267px -205px;
    &:hover {
      background-position: -267px -235px;
    }
  }
  .subscribe-flag {
    background-position: -300px -205px;
    &:hover {
      background-position: -300px -235px;
    }
  }
  ol {
    li {
      height: 32px;
      line-height: 32px;
      display: flex;
      padding-left: 15px;
      position: relative;
      span {
        display: block;
        width: 35px;
        height: 32px;
        text-align: center;
        color: rgb(102, 102, 102);
        font-size: 16px;
      }
      .no-top {
        color: rgb(193, 13, 12);
      }
      &:hover {
        .oper {
          display: block;
        }
      }
    }
    .oper {
      width: 100px;
      position: absolute;
      right: -10px;
      .index,
      .sprite_icon2 {
        width: 17px;
        height: 17px;
        margin-right: 10px;
      }
      .s-bg-11 {
        background-position: -267px -268px;
      }
      .sprite_icon2 {
        background-position: 0px -700px;
      }
      .s-bg-12 {
        background-position: -297px -268px;
      }
    }
  }
`
