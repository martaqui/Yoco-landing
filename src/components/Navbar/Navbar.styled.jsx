import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled("div")`
  width: 100%;
  height: 92px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLogo = styled("img")`
  cursor: pointer;
`;

export const NavbarLinksContainer = styled("div")`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #2d2625;
  text-decoration: none;
  cursor: pointer;
`;
