import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  /* color: ${(props) => `rgba(${props.theme.textRgba},0.1)`}; */
  color: ${(props) => props.color};
  font-size: calc(5rem + 5vw);
  z-index: 0;
`;

const BigTitle = (props) => {
  return (
    <Text
      top={props.top}
      left={props.left}
      right={props.right}
      color={props.color}
    >
      {props.text}
    </Text>
  );
};

export default BigTitle;
