import styled from "styled-components";

export const NavElement = styled.div``;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  ${NavElement} {
    display: flex;
    gap: 1rem;
  }
`;
