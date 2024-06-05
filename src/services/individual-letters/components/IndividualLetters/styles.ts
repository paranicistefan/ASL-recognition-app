import { Nunito } from "next/font/google";
import styled from "styled-components";

const nunito = Nunito({
  weight: ["800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const StyledH1Letter = styled.div``;
export const IndividualLettersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${StyledH1Letter} {
    font-size: 6rem;
    font-weight: 800;
    font-family: ${nunito.style.fontFamily};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
