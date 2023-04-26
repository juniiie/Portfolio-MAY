// HOME BUTTON
import styled from "styled-components";

import React from "react";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const PowerButton = () => {
  return <Power>Home</Power>;
};
