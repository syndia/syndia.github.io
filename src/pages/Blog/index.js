import React from "react";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";
import { StyleSheet } from "react-primitives";

import ActivityIndicator from "../../internals/ActivityIndicator";
import Page, { Banner, Container, Footer, Main } from "../../internals/Page";
import { List as ArticlesList } from "../../internals/Article";
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
          <ArticlesList items={posts.node.list} />
          <Pagination
            path={rest.location && rest.location.pathname}
            items={posts}
          />
        </Container>}
    </Main>
    <Footer />
  </Page>;

const styles = StyleSheet.create({
  root: {}
});

export default createContainer(PostsList, props => ({
  posts: query({ collection: "posts", limit: 9, sortBy: "date" })
}));
