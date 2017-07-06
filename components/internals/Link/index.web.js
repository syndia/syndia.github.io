import React from "react";
import { Link as RouterLink } from "react-router";
import { StyleSheet } from "react-primitives";
import { omit } from "lodash";

const Link = ({ activeClassName, activeStyle, className, style, ...rest }) => {
  const injectedProps = {
    style,
    className: className || "",
    activeStyle,
    activeClassName: activeClassName || ""
  };

  if (typeof injectedProps.style === "number") {
    injectedProps.className +=
      " " + StyleSheet.resolve(injectedProps.style).className;
    injectedProps.style = undefined;
  }
  if (typeof injectedProps.activeStyle === "number") {
    injectedProps.activeClassName +=
      " " + StyleSheet.resolve(injectedProps.activeStyle).className;
    injectedProps.activeStyle = undefined;
  }

  return <RouterLink {...omit(rest, "primary")} {...injectedProps} />;
};

export default Link;
