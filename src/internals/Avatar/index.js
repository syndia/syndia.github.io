import React from "react";
import { StyleSheet, View } from "react-primitives";

const Avatar = ({ style }) => <View style={[styles.root, style]} />;

const styles = StyleSheet.create({
  root: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 99999,
    borderStyle: "solid",
    borderWidth: "8"
  }
});

export default Avatar;
