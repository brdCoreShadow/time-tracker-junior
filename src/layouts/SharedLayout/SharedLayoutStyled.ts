import styled from "@emotion/styled";

export const SharedList = styled.ul`

@media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    & >li:nth-of-type(1){
      grid-column: 1 / span 3;
    }
}



& > li:not(:last-of-type){
    margin-bottom: 24px;

    @media (min-width: 768px){
        margin-bottom: 0;
    }
}
`