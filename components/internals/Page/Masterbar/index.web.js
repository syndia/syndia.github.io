import React from "react";
import { StyleSheet, Text } from "react-primitives";
import styled from "styled-components/primitives";

import { version } from "../../../../package.json";
import rem from "../../../../utilities/rem";
import Row from "../../Row";
import { Heading } from "../../Typography";
import Link from "../../Link";
import SocialItem from "../../Social/Item";

const RootView = styled(Row)`
  justify-content: space-between;
`;

const Cell = styled(Row)`
  flex-grow: 0;
  justify-content: center;
  align-items: baseline;
  padding: 0;
`;

const Pipe = styled.Text`
  color: inherit;
  opacity: 0.6;
`;

const Version = styled.Text`
  margin-left: ${rem(-8)};
  font-size: ${rem(14)};
  color: inherit;
  opacity: 0.6;
`;

const Masterbar = ({ style }) =>
  <RootView accessibilityRole="navigation" style={style}>
    <Cell>
      <Link to="/" style={styles.link}>
        <Heading aria-level="2">
          {"Syndia"}
        </Heading>
      </Link>
      <Link
        href="https://github.com/syndia/syndia.github.io"
        style={styles.link}
      >
        <Version>{`v${version}`}</Version>
      </Link>
    </Cell>
    <Cell>
      <Link to="/posts" style={styles.link}>
        <Text>
          {"Articles"}
        </Text>
      </Link>
      <Pipe>
        {"|"}
      </Pipe>
      <SocialItem
        link="https://twitter.com/syndianl"
        displayName
        style={styles.link}
      />
      <SocialItem
        link="https://github.com/syndia"
        displayName
        style={styles.link}
      />
    </Cell>
  </RootView>;

const styles = StyleSheet.create({
  link: {
    padding: 10,
    textDecorationLine: "none",
    color: "inherit"
  }
});

export default Masterbar;
