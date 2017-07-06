import styled from "styled-components";

import Link from "../Link";

const Button = styled.button`
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid ${props => props.primary && props.theme.colors.primary};
  border-radius: 3px;
  text-decoration: none;
  background: ${props =>
    props.primary ? props.theme.colors.primary : "transparent"};
  color: ${props => (props.primary ? props.theme.colors.paper : "inherit")};
`;

export const LinkButton = Button.withComponent(Link);

export default Button;
