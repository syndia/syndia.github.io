import React from "react";
import { StyleSheet, View } from "react-primitives";
import styled from "styled-components/primitives";

import rem from "../../../../utilities/rem";
import Link from "../../Link";
import Row from "../../Row";
import Section from "../Section";

const StyledRow = styled(Row)`
  flex-grow: 0;
  justify-content: center;
`;

const Text = styled.Text`
  align-self: center;
  line-height: 20;
  font-size: ${rem(15)};
  font-weight: 300;
  color: ${props => props.theme.colors.dimgray};
`;

const Footer = ({ style, children }) =>
  <Section accessibilityRole="contentinfo" style={style}>
    {children &&
      <View style={styles.children}>
        {children}
      </View>}
    <StyledRow>
      <Text>
        {"Website by "}
      </Text>
      <Link href="https://www.syndia.nl" style={styles.link}>
        <Text>
          {"Syndia.nl"}
        </Text>
      </Link>
      <Text>
        {" Made with ♥ and "}
      </Text>
      <Link href="https://phenomic.io" target="_blank" style={styles.link}>
        <Text>
          {"<Phenomic />"}
        </Text>
      </Link>
    </StyledRow>
  </Section>;

const styles = StyleSheet.create({
  link: {
    textDecorationLine: "none",
    color: "inherit"
  }
});

export default Footer;
