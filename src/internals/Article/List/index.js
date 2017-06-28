import React from "react";
import { StyleSheet, View } from "react-primitives";

import Preview from "../Preview";

const List = ({ items }) =>
  <View>
    {items && items.map(article => <Preview key={article.id} post={article} />)}
  </View>;

export default List;
