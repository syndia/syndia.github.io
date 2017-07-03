import React from "react";
import { StyleSheet, Text, View } from "react-primitives";

import { LinkButton } from "../../Button";

const FilterMessage = ({ path, paramName, items, style }) =>
  <View style={[style, styles.root]}>
    <Text style={styles.text}>
      {"You are currently viewing articles that match"}
    </Text>
    <Text style={[styles.text, styles.strong]}>
      <strong>{` ${items} `}</strong>
    </Text>
    <Text style={styles.text}>{`${paramName}. `}</Text>
    <LinkButton to={`${path}`}>
      <Text style={(styles.text, styles.linkText)}>
        {"View all"}
      </Text>
    </LinkButton>
  </View>;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
    opacity: 0.4
  },
  strong: {
    opacity: 1
  },
  linkText: {
    fontSize: 14,
    textTransform: "uppercase",
    opacity: 1
  }
});

export default FilterMessage;
