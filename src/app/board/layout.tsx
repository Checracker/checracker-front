"use client";
import styled from "@emotion/styled";
import { Apple } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Add from ".//Add.svg";
const navBtnStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "8px, 0px ,8px ,0px",
  gap: "4px",
  color: "white",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
};

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <NavBar>
        <div style={{ width: "100%" }}>
          <NavTop>
            <Button sx={navBtnStyles} component={Link} to="/">
              <Apple sx={{ fontSize: 40 }} />
              <NavFont>hamzzy</NavFont>
            </Button>
            <Button sx={navBtnStyles} component={Link} to="/">
              <Add />
              <NavFont>추가하기</NavFont>
            </Button>
          </NavTop>
          <NavMiddle>
            <Button sx={navBtnStyles} component={Link} to="/">
              <Apple sx={{ fontSize: 40 }} />
              <NavFont>설정하기</NavFont>
            </Button>
            <Button sx={navBtnStyles} component={Link} to="/">
              <Apple sx={{ fontSize: 40 }} />
              <NavFont>hamzzy</NavFont>
            </Button>
            <Button sx={navBtnStyles} component={Link} to="/">
              <Apple sx={{ fontSize: 40 }} />
              <NavFont>모음집</NavFont>
            </Button>
            <Button sx={navBtnStyles} component={Link} to="/">
              <Apple sx={{ fontSize: 40 }} />
              <NavFont>보고서</NavFont>
            </Button>
            <Button sx={navBtnStyles} component={Link} to="/">
              <Apple sx={{ fontSize: 40 }} />
              <NavFont>만든사람들</NavFont>
            </Button>
          </NavMiddle>
        </div>
        <NavBottom>
          <Button sx={navBtnStyles} component={Link} to="/">
            <Apple sx={{ fontSize: 40 }} />
            <NavFont>휴지통</NavFont>
          </Button>
        </NavBottom>
      </NavBar>
      {children}
    </Container>
  );
}

const NavBar = styled.div`
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
  width: 100%;
`;

const NavBottom = styled.div`
  width: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid white;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: start;
`;

const NavFont = styled.div`
  font-weight: 500;
  line-height: 19.5px;
  font-size: 13px;
`;
