import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-image: url("react-admin-dashboard/src/navbar.avif"); /* Path to your background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative; /* Required for overlay */
`;

const NavbarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
`;

const Logo = styled.h1`
  color: #FFF; 
  z-index: 1; 
`;





const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarOverlay />
      <Logo>My Details</Logo>
    </NavbarContainer>
  );
};

export default Navbar;
