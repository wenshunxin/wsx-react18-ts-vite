import styled from 'styled-components'
export const CommentWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px dotted #ccc;
  .cnt {
    word-break: break-word;
  }
  .que {
    padding: 8px 19px;
    margin-top: 10px;
    line-height: 20px;
    background: #f4f4f4;
    border: 1px solid #dedede;
    position: relative;
    .darr {
      position: absolute;
      top: -7px;
      left: 20px;
      font-size: 12px;
      line-height: 14px;
      i {
        position: absolute;
        top: 0;
        left: 0;
      }
      .bd {
        color: #dedede;
      }
      .bg {
        top: 1px;
        color: #f4f4f4;
      }
    }
  }
  .rp {
    margin-top: 15px;
  }
  i.sprite_icon3 {
    width: 15px;
    height: 14px;
    background-position: -150px 0;
  }
`
