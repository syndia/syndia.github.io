import React from "react";
import styled from "styled-components/primitives";

import { heading } from "../../../../config/theme";
import rem from "../../../../utilities/rem";

const Text = styled.Text`
  line-height: ${props => rem(heading[parseInt(props["aria-level"]) - 1] + 4)};
  font-size: ${props => rem(heading[parseInt(props["aria-level"]) - 1])};
  font-weight: 300;
`;

const Heading = ({ style, children, ...rest }) =>
  <Text {...rest} accessibilityRole="heading" style={style}>
    {children}
  </Text>;

export default Heading;
