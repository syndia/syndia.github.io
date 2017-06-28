import React from "react";
import { StyleSheet, Text, View } from "react-primitives";

import Link from "../../Link";

import Author from "../Author";

const MetaData = ({ authors, date, relative, tags, style }) =>
  <View style={[style, styles.root]}>
    {authors && authors.length && <Author {...authors[0]} compact />}
    {tags &&
      tags.length &&
      <View>
        <Link to={`/posts/tags/${tags[0]}`} style={styles.link}>
          <Text style={[styles.text, styles.category]}>{tags[0]}</Text>
        </Link>
      </View>}
  </View>;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  link: {
    textDecorationLine: "none",
    color: "inherit"
  },
  text: {
    fontWeight: "300",
    fontSize: 13,
    opacity: 0.4
  }
});

export default MetaData;
