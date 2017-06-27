import React from "react";
import { StyleSheet, Text, View } from "react-primitives";

import { version } from "../../../../package.json";

import Link from "../../Link";

const Navigation = ({ style }) =>
  <View accessibilityRole="navigation" style={[style, styles.root]}>
    <View style={styles.cell}>
      <Link to="/" style={styles.link}>
        <Text style={[styles.text, styles.heading]}>{"Syndia"}</Text>
      </Link>
      <Link
        href="https://github.com/syndia/syndia.github.io"
        style={styles.link}
      >
        <Text style={[styles.text, styles.version]}>{`v${version}`}</Text>
      </Link>
    </View>
  </View>;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  link: {
    padding: 10,
    textDecorationLine: "none",
    color: "inherit"
  },
  text: {},
  cell: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline"
  },
  heading: {
    lineHeight: 24 * 2,
    fontSize: 24
  },
  version: {
    marginLeft: -10,
    fontSize: 12,
    opacity: 0.4
  }
});

export default Navigation;