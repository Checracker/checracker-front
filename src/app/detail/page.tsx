"use client";

import FroalaEditor from "@/components/ui/FroalaEditor/FroalaEditor";
import { theme } from "@/styles/emotionTheme";
import styled from "@emotion/styled";
import { Button, Modal } from "@mui/material";
import { useState } from "react";

type BoardNumber = {
  boardNumber: number;
};

export default function DetailBoard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let tempBoardNumber = 3;
  return (
    <div>
      <Button onClick={handleOpen}>클릭</Button>
      <Modal open={open} onClose={handleClose}>
        <ModalEditor>
          <Header boardNumber={tempBoardNumber}>
            <div>{tempBoardNumber}</div>
            중요x 긴급os
          </Header>
          <Hr boardNumber={tempBoardNumber}></Hr>
          <div>
            <Title>최종 목표에 대한 내용</Title>
            <div>목표에 대한 내용을 메모해보세요 // floaraEditor</div>
          </div>
          <div>
            todolist
            <div>할일추가하기</div>
            <div>목표 list</div>
          </div>
          <FroalaEditor />
        </ModalEditor>
      </Modal>
    </div>
  );
}

const ModalEditor = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 70%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px 2px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004d;
`;

const Header = styled.div<BoardNumber>`
  display: flex;
  flex-direction: row;
  color: ${({ boardNumber, theme }) => theme.board[boardNumber - 1].title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.title}px;
  line-height: 36px;
`;
const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.title}px;
  color: ${({ theme }) => theme.colors.danger};
  line-height: 36px;
`;

const Hr = styled.hr<BoardNumber>`
  border-color: ${({ boardNumber, theme }) =>
    theme.board[boardNumber - 1].line};
  border-width: 1px;
`;
