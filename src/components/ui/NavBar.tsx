"use client";

import React from "react";
import styled from "@emotion/styled";
import NavBtn from "@/components/ui/NavBtn";

const BigFontSize = 40;
const SmallFontSize = 24;

export default function NavBar() {
  return (
    <Container>
      <div style={{ width: "100%" }}>
        <NavTop>
          <NavBtn
            alt="nickname"
            iconSrc={"/images/profile.svg"}
            label={"hamzzy"}
            size={BigFontSize}
          />
          <NavBtn
            alt="add"
            iconSrc={"/images/Add.svg"}
            label={"추가하기"}
            size={BigFontSize}
          />
        </NavTop>
        <NavMiddle>
          <NavBtn
            alt="home"
            iconSrc={"/images/Home.svg"}
            label={"홈메뉴"}
            size={SmallFontSize}
          />
          <NavBtn
            alt="setting"
            iconSrc={"/images/Setting.svg"}
            label={"설정하기"}
            size={SmallFontSize}
          />
          <NavBtn
            alt="colletion"
            iconSrc={"/images/Desk.svg"}
            label={"모음집"}
            size={SmallFontSize}
          />
          <NavBtn
            alt="report"
            iconSrc={"/images/Arhive.svg"}
            label={"보고서"}
            size={SmallFontSize}
          />
          <NavBtn
            alt="creators"
            iconSrc={"/images/Pen.svg"}
            label={"만든사람들"}
            size={SmallFontSize}
          />
        </NavMiddle>
      </div>
      <NavBottom>
        <NavBtn
          alt="TrashBin"
          iconSrc={"/images/Trash.svg"}
          label={"휴지통"}
          size={SmallFontSize}
        />
      </NavBottom>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 26px 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(29, 26, 26, 1);
  width: 92px;
  color: white;
`;
const NavTop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 26px;
  margin-bottom: 26px;
`;
const NavMiddle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const NavBottom = styled.div`
  width: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid white;
`;
