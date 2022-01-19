import styled from "styled-components";

export const LikePageContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 486px;
  ::-webkit-scrollbar{
    width: 10px;
    
  }
  ::-webkit-scrollbar-track {
    background: #e3f2fd;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
  background: #bbdefb;
  border-radius: 10px;
}
`