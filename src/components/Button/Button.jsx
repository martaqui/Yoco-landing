import { styled } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled("div")`
  width: fit-content;
  height: 44px;
  border-radius: 100px;
  padding: 12px 24px 12px 24px;
  font-size: 16px;
  font-weight: 700;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  background: ${(props) =>
    props.variant === "primary"
      ? "linear-gradient(94.97deg, #ff7663 27.09%, #ffa082 76.67%)"
      : "black"};
  cursor: pointer;
`;

export const Button = ({ onClick, variant, text }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.oneOf("primary", "secondary"),
  text: PropTypes.string,
};
