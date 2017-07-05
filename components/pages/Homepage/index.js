import React from "react";
import styled from "styled-components/primitives";

import Page, {
  Banner,
  Container,
  Footer,
  Main,
  Section
} from "../../internals/Page";
import { Heading } from "../../internals/Typography";

const StyledContainer = Container.extend`
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`color: ${props => props.theme.colors.dimgray};`;

const StyledHeading = styled(Heading)`margin-bottom: 40px;`;

const Homepage = ({ ...rest }) =>
  <Page {...rest}>
    <Banner title="I'm a web designer / developer..." />
    <Main>
      <StyledContainer>
        <StyledHeading aria-level="2">
          {"What I Can do."}
        </StyledHeading>
        <StyledHeading aria-level="3">
          {"Design what you want."}
        </StyledHeading>
        <Text>
          {"I like to keep it simple. My goals are to focus on typography,"}
          {"content and conveying the message that you want to send."}
        </Text>
      </StyledContainer>
    </Main>
    <Footer />
  </Page>;

export default Homepage;
