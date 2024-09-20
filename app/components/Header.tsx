"use client";

import styled from '@emotion/styled';
import { RefColor } from '@/styles/RefColor';
import { Subtitle } from '@/styles/Typography';

const NavBar = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.a`
  ${Subtitle.Level1}
  color: ${RefColor.offwhite100};
  text-decoration: none;
  margin-left: 2rem;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    color: #ddd;
  }
`;

const LogoWrapper = styled.a`
  ${Subtitle.Level1}
  color: ${RefColor.offwhite100};
`;

const ResumeWrapper = styled.a`
  ${Subtitle.Level1}
  color: ${RefColor.offwhite100};
  border: 1px solid ${RefColor.offwhite100};
  margin-left: 2rem;
`;

function Header() {
  return (
    <NavBar>
      <LogoWrapper>Logo</LogoWrapper>
      <div>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Experience</NavItem>
        <NavItem href="#">Education</NavItem>
        <NavItem href="#">Contact</NavItem>
        <ResumeWrapper>Resume</ResumeWrapper>
      </div>
    </NavBar>
  );
}

export default Header;