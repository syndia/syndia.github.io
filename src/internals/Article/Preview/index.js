import React from "react";
import { StyleSheet, View } from "react-primitives";

import Link from "../../Link";
import { Heading } from "../../Typography";

const Preview = ({ post }) =>
  <View>
    <Link to={`/posts/${post.id}`}>
      <Heading level="2">{post.title}</Heading>
    </Link>
  </View>;

export default Preview;
