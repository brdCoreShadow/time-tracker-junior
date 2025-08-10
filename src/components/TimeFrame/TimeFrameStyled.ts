import { ITimeframeStyled } from "@/utils/types";
import styled from "@emotion/styled";

export const TimeFrameItem = styled.li``

export const TimeFrameBtn = styled.button<ITimeframeStyled>`
font-size: 18px;
line-height: 1.2;

color:${({stressed}) => stressed === "active" ? "#fff" : "#7078C9"};

background-color: transparent;
`