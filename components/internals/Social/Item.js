import React from "react";
import { StyleSheet, Text } from "react-primitives";
import { memoize } from "lodash";

import Link from "../Link";

// eslint-disable-next-line import/no-namespace
import * as Icons from "./icons";

const SocialItem = ({
  link,
  title,
  icon,
  displayName,
  textStyle,
  style,
  children
}) => {
  const provider = getProvider(link);
  const name = PROVIDER_NAMES.get(provider);

  if (!title) {
    title = `Visit on ${name}`;
  } else if (typeof title === "function") {
    title = title(name);
  }

  return (
    <Link target="_blank" href={link} title={title} style={style}>
      {icon && PROVIDER_ICONS.get(provider)}
      {children}
      {displayName && <Text style={[styles.text, textStyle]}>{name}</Text>}
    </Link>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "inherit"
  }
});

const FACEBOOK = "FACEBBOOK";
const GITHUB = "GITHUB";
const GOOGLE_PLUS = "GOOGLE_PLUS";
const INSTAGRAM = "INSTAGRAM";
const LINKEDIN = "LINKEDIN";
const TWITTER = "TWITTER";
const YOUTUBE = "YOUTUBE";

const PROVIDER_REGEX = new Map([
  [FACEBOOK, /facebook.com/],
  [GITHUB, /github.com/],
  [GOOGLE_PLUS, /plus.google.com/],
  [INSTAGRAM, /instagram.com/],
  [LINKEDIN, /linkedin.com/],
  [TWITTER, /twitter.com/],
  [YOUTUBE, /youtube.com/]
]);

const PROVIDER_NAMES = new Map([
  [FACEBOOK, "Facebook"],
  [GITHUB, "GitHub"],
  [GOOGLE_PLUS, "Google Plus"],
  [INSTAGRAM, "Instagram"],
  [LINKEDIN, "LinkedIn"],
  [TWITTER, "Twitter"],
  [YOUTUBE, "Youtube"]
]);

const PROVIDER_ICONS = new Map([
  [FACEBOOK, <Icons.Facebook key="facebook-icon" />],
  [GITHUB, <Icons.GitHub key="github-icon" />],
  [GOOGLE_PLUS, <Icons.GooglePlus key="googleplus-icon" />],
  [LINKEDIN, <Icons.LinkedIn key="linkedin-icon" />],
  [TWITTER, <Icons.Twitter key="twitter-icon" />]
]);

const getProvider = memoize(url => {
  for (const [provider, regex] of PROVIDER_REGEX) {
    if (regex.test(url)) return provider;
  }
  return null;
});

export default SocialItem;
