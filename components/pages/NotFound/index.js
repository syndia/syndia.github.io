import React from "react";
import styled from "styled-components/primitives";

import Page, { Banner, Footer, Main, Container } from "../../internals/Page";

const StyledContainer = Container.extend`
  justify-content: center;
  align-items: center;
`;

const View = styled.View`align-items: center;`;

const Text = styled.Text`
  margin-bottom: 40px;
  text-align: center;
  color: inherit;
`;

const Oops = styled.Text`
  margin-bottom: 40px;
  font-size: 48px;
  line-height: 52px;
  color: ${props => props.theme.colors.dimgray};
`;

const NotFound = ({ error, ...rest }) => {
  const status = (error && error.status) || 404;
  const errorText =
    error && status !== 404 ? error.statusText : "page not found";

  return (
    <Page {...rest}>
      <Banner title={errorText} />
      <Main>
        <StyledContainer>
          <Oops>
            {"Oooops!"}
          </Oops>
          <View>
            <Text>
              <strong>{status}</strong> {errorText}
            </Text>
            {status === 404 &&
              <View>
                {"It seems you found a broken link. "}
                {"Sorry about that."}
                <br />
                {"Do not hesitate to report this page."}
              </View>}
          </View>
        </StyledContainer>
      </Main>
      <Footer />
    </Page>
  );
};

export default NotFound;
