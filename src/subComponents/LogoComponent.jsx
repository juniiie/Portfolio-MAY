import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "darkTheme" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const Container = styled.div`
  padding: 2rem;
`;

const LogoComponent = (props) => {
  return (
    <div>
      <Logo color={props.theme}>CB</Logo>
    </div>
  );
};

export default LogoComponent;
