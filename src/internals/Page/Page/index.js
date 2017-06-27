import React from "react";
import { StyleSheet, View } from "react-primitives";

const Page = ({ style, children }) =>
  <View style={[style, styles.root]}>
    {children}
  </View>;

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%"
  }
});

export default Page;
