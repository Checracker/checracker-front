"use client";

import NavBar from "@/components/ui/NavBar";
import styled from "@emotion/styled";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: 만약 내가 만든 board가 아니라면 404 페이지보여주기
  return (
    <Container>
      <NavBar />
      <div className="flex-grow">{children}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: start;
`;
