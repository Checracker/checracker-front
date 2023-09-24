"use client";

import Board from "@/components/ui/Board";
import styled from "@emotion/styled";

export default function BoardPage() {
  const color = {
    board1: {
      bgColor: "#FFEFEFE5",
      addBtnColor: "#E56363",
      hrColor: "#FF3F3F",
      titleText: "#8C1B1B",
    },
    board2: {
      bgColor: "#E5D9E7",
      addBtnColor: "#B352D6",
      hrColor: "#CD3FFF",
      titleText: "#8B28AD",
    },
    board3: {
      bgColor: "#E8DED9",
      addBtnColor: "#EB8F3B",
      hrColor: "#FF3F3F",
      titleText: "#C56825",
    },
    board4: {
      bgColor: "#E8E7E7",
      addBtnColor: "#848484",
      hrColor: "#848484",
      titleText: "#505050",
    },
  };

  return (
    <Container>
      <MainHeader>MainTop</MainHeader>
      <BoardBox>

      <MainBody>
        <Board colors={color.board2}></Board>
        <Board colors={color.board1}></Board>
        <Board colors={color.board4}></Board>
        <Board colors={color.board3}></Board>

      </MainBody>
      </BoardBox>
    </Container>
  );
}

const FlexRowBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const MainBody = styled.div`
  //todo 임시로 그리드로 한번 작성
  width:100%;
  height: calc(100vh - 67px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1%;
  padding: 30px;
`;


const MainHeader = styled(FlexRowBox)``;

const Container = styled(FlexColBox)`
  width: 100vw;
  height: 100vh;
  background-color: #bdc3fa99;
`;
