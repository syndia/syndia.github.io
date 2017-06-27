import React from "react";
import { StyleSheet, View } from "react-primitives";

const Container = ({ style, children }) =>
  <View style={[style, styles.root]}>{children}</View>;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    maxWidth: 900,
    marginHorizontal: "auto"
  }
});

export default Container;
