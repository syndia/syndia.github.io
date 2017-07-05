import React from "react";
import { View } from "react-primitives";
import styled from "styled-components/primitives";

import { Title as DocumentTitle } from "../../Document";
import { Gradient as BackgroundGradient } from "../../Background";
import { Heading } from "../../Typography";
import Section from "../Section";
import Container from "../Container";
import Masterbar from "../Masterbar";

const StyledContainer = styled(Container)`
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  padding-top: 20;
  padding-bottom: 60;
`;

const Banner = ({ headTitle, title, style, children }) =>
  <Section accessibilityRole="banner">
    <BackgroundGradient style={style} start="#eee" end="#ccc">
      <DocumentTitle text={headTitle || title} />
      <Masterbar />
      <StyledContainer>
        <StyledHeading aria-level="1">
          {title}
        </StyledHeading>
        {children &&
          <View>
            {children}
          </View>}
      </StyledContainer>
    </BackgroundGradient>
  </Section>;

export default Banner;
