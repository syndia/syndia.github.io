import React from "react";
import { Image, StyleSheet, View } from "react-primitives";

import { LineDivider } from "../../Divider";
import Row from "../../Row";
import Link from "../../Link";
import { Heading, Headline, Title } from "../../Typography";

const Preview = ({ post, style }) =>
  <View style={[style, styles.root]}>
    <LineDivider />
    <Link to={`/posts/${post.id}`} style={styles.link}>
      <Row>
        <Image
          source={{ uri: "http://via.placeholder.com/275x150" }}
          style={styles.image}
        />

        <View>
          <Title>
            {post.title}
          </Title>
          <Headline numberOfLines={2}>
            {post.headline}
          </Headline>
        </View>
      </Row>
    </Link>
    <LineDivider />
  </View>;

const styles = StyleSheet.create({
  root: {},
  link: {
    textDecorationLine: "none",
    color: "inherit"
  },
  image: {
    marginRight: 16,
    width: 275,
    height: 150
  }
});

export default Preview;
