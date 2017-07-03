import styled from "styled-components";

import Link from "../Link";

const Button = styled.button`
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid ${props => props.theme.colorPrimary};
  border-radius: 3px;
  text-decoration: none;
  background: ${props => props.theme.colorPaper};
  color: ${props => props.theme.colorPrimary};
`;

export const LinkButton = Button.withComponent(Link);

export default Button;
