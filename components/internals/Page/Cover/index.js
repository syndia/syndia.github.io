import React from "react";
import styled from "styled-components/primitives";

import { Title as DocumentTitle } from "../../Document";
import { Stripes as BackgroundStripes } from "../../Background";
import Section from "../Section";
import Masterbar from "../Masterbar";
import Header from "../Header";

const StyledSection = styled(Section)`
  min-height: 100vh;
`;

const Text = styled.Text`color: white;`;

const Cover = ({ headTitle, title, style, children }) =>
  <StyledSection accessibilityRole="banner">
    <Text>
      <BackgroundStripes />
      <DocumentTitle text={headTitle || title} />
      <Masterbar />
      <Header text={title}>
        {children}
      </Header>
    </Text>
  </StyledSection>;

export default Cover;
