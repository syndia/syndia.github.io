import React from "react";
import styled from "styled-components/primitives";

const StyledAvatar = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  width: ${props => props.size || "100px"};
  height: ${props => props.size || "100px"};
  border-radius: ${props => props.radius || "99999px"};
  border-style: solid;
  border-width: 8px;
  background-color: ${props => props.theme.colorPrimary};
`;

const Avatar = ({ name, style }) => {
  if (!name) throw new Error("Avatar requires a name");

  return <StyledAvatar style={style} />;
};

export default Avatar;
