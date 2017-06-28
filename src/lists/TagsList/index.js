import React from "react";
import { StyleSheet, Text, View } from "react-primitives";

import Link from "../../internals/Link";

const TagsList = ({ path, items, style }) =>
  <View style={[style, styles.root]}>
    {items &&
      items.map(tag =>
        <Link key={tag} to={`${path}/tag/${tag}`} style={styles.link}>
          <Text style={styles.text}>{tag}</Text>
        </Link>
      )}
  </View>;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 16
  },
  link: {
    margin: 8,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 99999,
    textDecorationLine: "none",
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    color: "inherit"
  },
  text: {
    lineHeight: 20,
    fontSize: 14,
    fontWeight: "300",
    opacity: 0.5
  }
});

export default TagsList;
