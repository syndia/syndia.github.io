import React from "react";
import { StyleSheet } from "react-primitives";

import { Title as DocumentTitle } from "../../Document";
import { Gradient as BackgroundGradient } from "../../Background";

import { Heading } from "../../Typography";

import Section from "../Section";
import Container from "../Container";
import Navigation from "../Navigation";

const Banner = ({ headTitle, title, style, children }) =>
  <Section accessibilityRole="banner" style={styles.root}>
    <BackgroundGradient style={style} start="#eee" end="#ccc">
      <DocumentTitle text={headTitle || title} />
      <Navigation />
      <Container style={styles.container}>
        <Heading level="1" style={styles.heading}>{title}</Heading>
        {children && <View style={styles.children}>{children}</View>}
      </Container>
    </BackgroundGradient>
  </Section>;

const styles = StyleSheet.create({
  root: {},
  container: {
    alignItems: "center"
  },
  heading: {
    paddingTop: 40,
    paddingBottom: 60
  }
});

export default Banner;
