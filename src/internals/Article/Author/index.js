import React from "react";
import { StyleSheet, Text, View } from "react-primitives";

import Link from "../../Link";
import Avatar from "../../Avatar";

const Author = ({ id, name, headline, /* socials, compact, */ style, children }) =>
  <View style={[style, styles.root]}>
    <Avatar style={[styles.cell, styles.avatar]} />
    <View style={[styles.cell, styles.container]}>
      <Link to={`/authors/${id}`} style={styles.link}>
        <Text style={[styles.text, styles.heading]}>{name}</Text>
      </Link>
      {headline && <Text style={styles.text}>{headline}</Text>}
      {children &&
        <Text style={[styles.text, styles.children]}>{children}</Text>}
    </View>
  </View>;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },
  cell: {},
  container: {},
  link: {
    textDecorationLine: "none",
    color: "inherit"
  },
  text: {
    lineHeight: 16 * 1.4,
    fontSize: 13,
    fontWeight: "300",
    opacity: 0.4
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 20,
    backgroundColor: "#eee",
    borderColor: "#ddd"
  },
  heading: {
    fontSize: 16,
    opacity: 1
  },
  children: {}
});

export default Author;
