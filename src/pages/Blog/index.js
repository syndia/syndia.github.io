import React from "react";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";
import { StyleSheet } from "react-primitives";

import ActivityIndicator from "../../internals/ActivityIndicator";
import Page, { Banner, Container, Footer, Main } from "../../internals/Page";
import { List as ArticlesList } from "../../internals/Article";
import { Message as FilterMessage } from "../../internals/Filter";
import Pagination from "../../widgets/Pagination";

const PostsList = ({ isLoading, posts, ...rest }) =>
  <Page {...rest}>
    <Banner title="Syndia's Blog" />
    <Main>
      {isLoading && <ActivityIndicator />}
      {!isLoading &&
        posts &&
        posts.node &&
        posts.node.list &&
        <Container>
          {rest.params &&
            rest.params.tag &&
            <FilterMessage
              path="/posts"
              paramName="tag"
              items={rest.params.tag}
              style={styles.message}
            />}
          <ArticlesList items={posts.node.list} />
          <Pagination path="posts" items={posts} />
        </Container>}
    </Main>
    <Footer />
  </Page>;

const styles = StyleSheet.create({
  message: {
    marginTop: 40,
    marginBottom: 20
  }
});

export default createContainer(PostsList, props => ({
  posts: query({
    collection: "posts",
    limit: 9,
    sortBy: "date",
    ...(props.params.after ? { after: props.params.after } : null),
    ...(props.params.tag ? { by: "tags", value: props.params.tag } : {})
  })
}));
