import React from "react";
import styled from "styled-components/primitives";

import { Section, Container } from "../";
import Row from "../../Row";
import { Heading, Headline } from "../../Typography";

const Box = styled.View`
  margin-left: 10%;
  flex-shrink: 1;
  flex-basis: 50%;
  min-width: 220px;
`;

const CallToAction = ({ title, headline, children }) =>
  <Row>
    <Box>
      <Heading aria-level="2">
        {title}
      </Heading>
      {headline &&
        <Headline>
          {headline}
        </Headline>}
    </Box>
    <Box>
      <Row>
        {children}
      </Row>
    </Box>
  </Row>;

export default CallToAction;
