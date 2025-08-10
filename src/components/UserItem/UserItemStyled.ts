import styled from "@emotion/styled";

export const UserItemStyled = styled.li`
  background-color: #1c204b;

  border-radius: 16px;

  @media (min-width: 1280px){
    height: 100%;
  }
`;

export const AvaCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 32px;
  padding-bottom: 36px;
  padding-left: 32px;
  padding-right: 32px;

  background-color: #5747ea;

  border-radius: 16px;

  @media (min-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;

  padding-bottom: 92px;

  }
`;

export const AvaThumb = styled.div`
  margin-right: 24px;

  @media (min-width: 1280px) {
    margin-bottom: 28px;
    margin-right: 0;
  }

  & > img {
    width: 64px;

    border: 1px solid #fff;
    border-radius: 50%;

    @media (min-width: 1280px) {
      width: 78px;
    }
  }
`;

export const ContentCon = styled.div`
  & > p {
    margin-bottom: 8px;

    font-size: 15px;
    line-height: 1.2;

    color: #bbc0ff;
  }

  & > h3 {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 300;
    color: #ffffff;

    @media (min-width: 1280px) {
      font-size: 40px;
    }
  }
`;

export const DashBoardCon = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const DashboarList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: center;

    & > li:not(:last-of-type) {
      margin-right: 64px;
    }
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;

    & > li:not(:last-of-type) {
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
`;
