import { IColorsHandler } from "@/utils/types";
import styled from "@emotion/styled";

export const Wrapper = styled.li<Partial<IColorsHandler>>`
  padding-top: 38px;

  background-color: ${({ activity, trackItemHandler }) =>
    trackItemHandler && activity ? trackItemHandler(activity) : "transparent"};

  border-radius: 16px;

  @media (min-width: 1280px){
   
  }
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

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 1280px){
    height: 100%;
  }
`;

export const CurrentDataCon = styled.div`
  color: #fff;

  @media (min-width: 768px) {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

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

    @media (min-width: 768px) {
      font-size: 56px;
      font-weight: 300;
      line-height: 1.2;

      color: #fff;
    }
  }

  & > h3 {
    font-size: 15px;
    line-height: 1.2;

    @media (min-width: 768px){
        font-weight: 400;
    }
  }
`;
