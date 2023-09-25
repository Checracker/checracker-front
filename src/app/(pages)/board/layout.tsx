"use client";

import NavBar from "@/components/ui/NavBar";
import styled from "@emotion/styled";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
