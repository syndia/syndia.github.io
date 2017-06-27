import React from "react";
import { StyleSheet, View } from "react-primitives";

const Section = ({ padded, style, children, ...rest }) =>
  <View {...rest} style={[style, styles.root, padded && styles.padding]}>
    {children}
  </View>;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    position: "relative"
  },
  padding: {
    paddingVertical: 96,
    paddingHorizontal: 32
  }
});

export default Section;
