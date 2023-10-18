"use client";

import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #ffffff;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  padding: 20px;
  background: ${theme.color.primary};
`;
