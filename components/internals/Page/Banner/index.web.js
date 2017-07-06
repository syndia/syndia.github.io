import React from "react";

import { Title as DocumentTitle } from "../../Document";
import { Gradient as BackgroundGradient } from "../../Background";
import Section from "../Section";
import Masterbar from "../Masterbar";
import Header from "../Header";

const Banner = ({ headTitle, title, style, children }) =>
  <Section accessibilityRole="banner">
    <BackgroundGradient style={style} start="#eee" end="#ccc">
      <DocumentTitle text={headTitle || title} />
      <Masterbar />
      <Header text={title}>
        {children}
      </Header>
    </BackgroundGradient>
  </Section>;

export default Banner;
