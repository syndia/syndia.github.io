import React from "react";
import { StyleSheet } from "react-primitives";

import Section from "../Section";

const Main = ({ style, ...rest }) =>
  <Section {...rest} style={[styles.root, style]} accessibilityRole="main" />;

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default Main;
