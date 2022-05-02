import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`

  margin-top: 20px;  margin-bottom:30px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  font-weight:600;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLogo = styled.div` 
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

export const Logo = styled(Link)`
  color: var(--text-color);
  transition: background 0.3s ease-in-out, color 0.6s ease-in-out;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  /* &.active {
    color: #15cdfc;
  } */

  :hover {
    color: var(--text-color);
  }
`;

export const NavLink = styled(Link)`
  color: var(--text-color);
  transition: background 0.3s ease-in-out, color 0.6s ease-in-out;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  margin-left: 5px;
  cursor: pointer;
  /* &.active {
    color: #1fff1f;
  } */

  :hover {
    color: var(--text-color);
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: var(--text-color);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;

    top: 15px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin-right: 24px;

  a {
    transition: background 0.3s ease-in-out, color 0.6s ease-in-out;
    margin-left: 12px;
    color: var(--text-color);
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
