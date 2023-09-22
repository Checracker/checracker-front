"use client";

import DateButton from "@/components/ui/DateButton";
import FroalaEditor from "@/components/ui/FroalaEditor/FroalaEditor";
import styled from "@emotion/styled";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Radio,
} from "@mui/material";
import { useState } from "react";

type BoardNumber = {
  boardNumber: number;
};

export default function DetailBoard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const tempBoardNumber = 3;
  const label = {
    inputProps: { "aria-label": `${tempBoardNumber}사분면목표 A` },
  };

  return (
    <div>
      <Button onClick={handleOpen}>클릭</Button>
      <Modal open={open} onClose={handleClose}>
        <ModalEditor>
          <TopContainer>
            <Header boardNumber={tempBoardNumber}>
              <div>{tempBoardNumber}</div>
              중요x 긴급os
            </Header>
            <Hr boardNumber={tempBoardNumber}></Hr>
            <HeaderBar>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Radio
                      style={{ width: 48, height: 48, marginRight: "8px" }}
                    />
                  }
                  label={
                    <LabelBox>
                      <Title>최종 목표에 대한 내용</Title>
                    </LabelBox>
                  }
                />
              </FormGroup>
              <ButtonBox>
                <DateButton />
                <DateButton />
                <DateButton />
              </ButtonBox>
            </HeaderBar>
            <FroalaEditor />
          </TopContainer>
          <TodoList>
            <FormGroup>
              todolist
              <AddTodoBtn onClick={() => console.log("할일 추가하기 클릭!")}>
                <p>+</p> 할 일 추가하기
              </AddTodoBtn>
              <TodoItem>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <LabelBox>
                      <Label>
                        밤 맛이 나는 바밤바밤 맛이 나는 바밤바밤 맛이 나는
                        바밤바밤 맛이 나는 바밤바
                      </Label>
                    </LabelBox>
                  }
                />
                <IssueBtn>이슈사항</IssueBtn>
              </TodoItem>
              <TodoItem>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <LabelBox>
                      <Label>
                        밤 맛이 나는 바밤바밤 맛이 나는 바밤바밤 맛이 나는
                        바밤바밤 맛이 나는 바밤바
                      </Label>
                    </LabelBox>
                  }
                />
                <IssueBtn>이슈사항</IssueBtn>
              </TodoItem>
              <TodoItem>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <LabelBox>
                      <Label>
                        밤 맛이 나는 바밤바밤 맛이 나는 바밤바밤 맛이 나는
                        바밤바밤 맛이 나는 바밤바
                      </Label>
                    </LabelBox>
                  }
                />{" "}
                <IssueBtn>이슈사항</IssueBtn>
              </TodoItem>
            </FormGroup>
          </TodoList>
          <BottomContainer>
            <SaveBtn>저장하기</SaveBtn>
          </BottomContainer>
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
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px 2px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004d;
`;
const TodoList = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.grayScale.bgColor};
`;
const Header = styled.div<BoardNumber>`
  display: flex;
  flex-direction: row;
  color: ${({ boardNumber, theme }) => theme.board[boardNumber - 1].primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.title}px;
  line-height: 36px;
`;
const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.title}px;
  color: ${({ theme }) => theme.colors.black};
  line-height: 36px;
  margin: 19px 0;
`;

const Hr = styled.hr<BoardNumber>`
  border-color: ${({ boardNumber, theme }) =>
    theme.board[boardNumber - 1].line};
  border-width: 1px;
`;

const AddTodoBtn = styled.div`
  display: flex;
  background-color: #a1a1a1;
  border-radius: 12px;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 0px 16px;
  height: 50px;
  gap: 8px;
`;

const TodoItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.black};
`;
const Label = styled.div`
  width: 500px;
  overflow: hidden;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const IssueBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 6px 12px;
  background-color: #ff4040;
  font-size: ${({ theme }) => theme.fontSize.medium14}px;
  font-weight: 500;
`;
const LabelBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const SaveBtn = styled.div`
  background-color: #de1a1a;
  color: white;
  width: 150px;
  border-radius: 8px;
  margin: 0 16px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BottomContainer = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
