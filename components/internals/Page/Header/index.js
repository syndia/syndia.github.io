import React from "react";
import { View } from "react-primitives";
import styled from "styled-components/primitives";

import { Heading } from "../../Typography";
import Container from "../Container";

const StyledContainer = styled(({ center, children }) =>
  <Container>
    {children}
  </Container>
)`
  align-items: ${props => (props.center ? "center" : "flex-start")};
`;

StyledContainer.displayName = "Container";

const StyledHeading = styled(Heading)`
  padding-top: 60;
  padding-bottom: 60;
`;

const Header = ({ text, children }) =>
  <StyledContainer>
    <StyledHeading aria-level="1">
      {text}
    </StyledHeading>
    {children &&
      <View>
        {children}
      </View>}
  </StyledContainer>;

export default Header;
