import styled from "@emotion/styled";

export const SharedList = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    grid-auto-flow: dense;

    & > li:nth-of-type(1) {
      grid-column: 1 / span 3;
    }
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 32px;
    grid-auto-flow: dense;
    align-items: stretch;

    & > li {
      min-height: 200px;
    }

    & > li:nth-of-type(1) {
      grid-column: 1 / 2;
      grid-row: 1 / span 2;
    }
  }

  & > li:not(:last-of-type) {
    margin-bottom: 24px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`;
