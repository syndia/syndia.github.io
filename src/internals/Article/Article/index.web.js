import React from "react";
import { StyleSheet, View } from "react-primitives";

const Article = ({ style, children }) =>
  <View accessibilityRole="article" style={[style, styles.root]}>
    {children}
  </View>;

const styles = StyleSheet.create({
  root: {}
});

export default Article;
