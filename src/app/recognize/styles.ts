import Image from "next/image";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const StyledPageLayout = styled.div``;
export const StyledPageContainer = styled.div``;
export const StyledLegendImage = styled(Image)``;
export const StyledLayoutContainer = styled.div`
  ${StyledPageLayout} {
    height: calc(100vh - 79.5px);
    padding: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  ${StyledPageContainer} {
    transition: all 0.3s linear;
  }
  ${StyledLegendImage} {
    animation: 0.3s linear slideIn;
  }
`;
