import {
  NavContainer,
  NavContent,
  NavTitle,
  NavOptions,
  NavItem,
  AnchorLink,
} from "./StyledComponents";

const Header = () => (
  <NavContainer>
    <NavContent>
      <NavTitle>Raghu Konala</NavTitle>
      <NavOptions>
        <NavItem>
          <AnchorLink href="#about">About</AnchorLink>
        </NavItem>
        <NavItem>
          <AnchorLink href="#projects">Projects</AnchorLink>
        </NavItem>
        <NavItem>
          <AnchorLink href="#contact">Contacts</AnchorLink>
        </NavItem>
      </NavOptions>
    </NavContent>
  </NavContainer>
);

export default Header;
