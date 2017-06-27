import React from "react";
import { StyleSheet, Text } from "react-primitives";

const Heading = ({ level, style, children }) =>
  <Text
    accessibilityRole="heading"
    aria-level={level}
    style={[level && styles[`h${level}`], style]}
  >
    {children}
  </Text>;

const styles = StyleSheet.create({
  h1: {
    lineHeight: 32 * 1.25,
    fontSize: 32,
    fontWeight: "200",
    textTransform: "uppercase"
  }
});

export default Heading;
