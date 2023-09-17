"use client";

import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Image from "next/image";

type NavBtnProps = {
  size: number;
  iconSrc: string;
  alt: string;
  label: string;
};

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
export default function NavBtn({ size, iconSrc, alt, label }: NavBtnProps) {
  return (
    <Button sx={navBtnStyles}>
      <Image src={iconSrc} alt={alt} width={size} height={size} />
      <NavFont>{label}</NavFont>
    </Button>
  );
}
const NavFont = styled.div`
  font-weight: 500;
  line-height: 19.5px;
  font-size: 13px;
`;
