import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12vh;
  width: 100vw;
  position: fixed;
  z-index: 3;
`;

export const NavContent = styled.div`
  flex-basis: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-basis: 90%;
  }
`;
export const NavTitle = styled.h1`
  color: #25282b;
  font-size: 18px;
  font-weight: 600;
  font-family: "Comfortaa";
  background-color: #f9faff;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const NavOptions = styled.ul`
  padding: 0px;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  list-style-type: none;
  margin-left: 15px;
`;

export const AnchorLink = styled.a`
  font-family: "Nunito";
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  text-decoration: none;
  color: #25282b;
`;
