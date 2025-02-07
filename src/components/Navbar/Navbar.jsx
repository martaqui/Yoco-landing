import {
  NavbarContainer,
  NavbarLinksContainer,
  NavbarLogo,
  StyledLink,
} from "./Navbar.styled";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button/Button";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleClickDownloadButton = () => {
    navigate("/descargas");
  };

  return (
    <NavbarContainer>
      <NavbarLogo
        alt="Logo"
        src="images/yoco-navbar-logo.png"
        width="91.15px"
        height="38px"
      />
      <NavbarLinksContainer>
        <StyledLink to="/">Recetas</StyledLink>
        <StyledLink to="/Planes">Planes</StyledLink>
        <StyledLink to="/Supermercados">Supermercados</StyledLink>
        <StyledLink to="/Yocobusiness">Yoco for business</StyledLink>
        <Button
          text={"Descarga la app"}
          variant={"primary"}
          onClick={handleClickDownloadButton}
        />
      </NavbarLinksContainer>
    </NavbarContainer>
  );
};
