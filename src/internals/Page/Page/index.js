import React from "react";
import Head from "react-helmet";
import { StyleSheet, View } from "react-primitives";

import GoogleAnalyticsTracker from "../../../widgets/GoogleAnalyticsTracker";

const Page = ({ style, children, ...rest }) =>
  <View style={[style, styles.root]}>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <GoogleAnalyticsTracker {...rest}>
      {children}
    </GoogleAnalyticsTracker>
  </View>;

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%"
  }
});

export default Page;
