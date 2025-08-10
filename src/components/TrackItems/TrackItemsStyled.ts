import { IColorsHandler } from "@/utils/types";
import styled from "@emotion/styled";

export const Wrapper = styled.li<Partial<IColorsHandler>>`
  padding-top: 38px;

  background-color: ${({ activity, trackItemHandler }) =>
    trackItemHandler && activity ? trackItemHandler(activity) : "transparent"};

  border-radius: 16px;
`;

export const TrackItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #1c204b;

  border-radius: 16px;
`;

export const CurrentDataCon = styled.div`
  color: #fff;

  & > p {
    margin-bottom: 8px;

    font-size: 18px;
    line-height: 1.2;
    font-weight: 500;
  }

  & > h3 {
    font-size: 32px;
    font-weight: 300;
    line-height: 1.2;
  }
`;

export const PrevDataCon = styled.div`
  color: #bbc0ff;

  & > p {
    margin-bottom: 8px;

    font-size: 18px;
    line-height: 1.2;
    font-weight: 500;
  }

  & > h3 {
    font-size: 15px;
    line-height: 1.2;
  }
`;
