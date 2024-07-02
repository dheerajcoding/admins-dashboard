import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 210px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.sidebarBackground};
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.8);
`;

const SidebarHeader = styled.div`
  margin-bottom: 10px;
  background-color: #2979FF;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 30px; /* Adjust size as needed */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px;
`;

const SidebarTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const SidebarLinks = styled.div`
  margin-top: 5px;
`;

const SidebarLinkItem = styled(Link)`
  display: block;
  padding: 20px;
  color: ${({ theme }) => theme.text};
  background-color: #FFFFFF;
  text-decoration: none;
  margin-bottom: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00E676;
    color: ${({ theme }) => theme.body};
    text-decoration: none;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <LogoImage src={process.env.PUBLIC_URL + '/AbhiFy.png'} alt="AbhiFy Logo" />
        <SidebarTitle>AbhiFy</SidebarTitle>
      </SidebarHeader>
      <SidebarLinks>
        <SidebarLinkItem to="/">Dashboard</SidebarLinkItem>
        <SidebarLinkItem to="/tables">Tables</SidebarLinkItem>
        <SidebarLinkItem to="/charts">Charts</SidebarLinkItem>
        <SidebarLinkItem to="/calendar">Calendar</SidebarLinkItem>
        <SidebarLinkItem to="/kanban">Kanban Board</SidebarLinkItem>
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
