import React from "react";
import styled from "styled-components/primitives";
import { omit } from "lodash";

import Page, {
  Cover,
  Container,
  CallToAction,
  Footer,
  Main,
  Section
} from "../../internals/Page";
import Row from "../../internals/Row";
import { Heading, Headline } from "../../internals/Typography";
import { LinkButton } from "../../internals/Button";

const StyledContainer = Container.extend`
  justify-content: center;
  align-items: center;
`;

const StyledRow = styled(Row)`margin-left: -2.2rem;`;

const Box = styled.View`
  flex-shrink: 1;
  width: 50%;
  min-width: 220px;
`;

const Text = styled.Text`color: ${props => props.theme.colors.dimgray};`;

const ButtonText = styled.Text`
  line-height: 28;
  font-size: 24;
`;

const StyledHeading = styled(({ children, ...rest }) =>
  <Heading {...omit(rest, "center")}>
    {children}
  </Heading>
)`
  text-align: ${props => (props.center ? "center" : "left")};
  margin-bottom: 40px;
`;

const StyledHeadline = styled(Headline)`
  line-height: 22;
  font-size: 18;
  font-weight: 200;
  max-width: 65%;
`;

const Homepage = ({ ...rest }) =>
  <Page {...rest}>
    <Cover title="I'm a web designer / developer...">
      <StyledHeadline>
        {"...based in Dordrecht, The Netherlands. I have a passion for "}
        {"web design and love to create for web and mobile devices."}
      </StyledHeadline>
      <StyledRow>
        <LinkButton to="/">
          <ButtonText>
            {"About Me"}
          </ButtonText>
        </LinkButton>
        <LinkButton to="/" primary>
          <ButtonText>
            {"Hire Now"}
          </ButtonText>
        </LinkButton>
      </StyledRow>
    </Cover>
    <Main>
      <StyledContainer>
        <Section>
          <StyledHeading aria-level="2" center>
            {"What I Can do."}
          </StyledHeading>
          <Row>
            <Box>
              <StyledHeading aria-level="3">
                {"Design what you want."}
              </StyledHeading>
              <Text>
                {
                  "I like to keep it simple. My goals are to focus on typography, "
                }
                {"content and conveying the message that you want to send."}
              </Text>
            </Box>
            <Box />
          </Row>
          <Row>
            <Box />
            <Box>
              <StyledHeading aria-level="3">
                {"Develop what you need."}
              </StyledHeading>
              <Text>
                {"I like to keep it simple. "}
                {"My goals are to focus on typography, "}
                {"content and conveying the message that you want to send."}
              </Text>
            </Box>
          </Row>
        </Section>
        <Section>
          <StyledHeading aria-level="2" center>
            {"I can help."}
          </StyledHeading>
          <StyledHeading aria-level="3">
            {"I’m currently available for freelance work."}
          </StyledHeading>
          <Text>
            {"If you have a project that you want to get started, "}
            {"think you need my help with something or just fancy saying hey, "}
            {"then get in touch."}
          </Text>
        </Section>
      </StyledContainer>
    </Main>
    <Footer>
      <CallToAction
        title="Ready to get started?"
        headline="I’m currently available for freelance work."
      >
        <LinkButton primary>
          {"Available for Hire"}
        </LinkButton>
        <LinkButton>
          {"Get in Touch"}
        </LinkButton>
      </CallToAction>
    </Footer>
  </Page>;

export default Homepage;
