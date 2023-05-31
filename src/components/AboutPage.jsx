import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { PowerButton } from "../subComponents/PowerButton";
import { ParticleComponent } from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import astronaut from "../assets/images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

export const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="darkTheme" />
        <SocialIcons theme="darkTheme" />
        <PowerButton />
        <ParticleComponent theme="darkTheme" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          G'day! I'm a web developer based in the beautiful city of Melbourne,
          Australia. I have a passion for crafting websites that not only look
          stunning but also provide an awesome user experience. While I enjoy
          working with the full stack, my heart belongs to front-end
          development.
          <br /> <br />
          For me, web development is an art form, and every project is a canvas
          waiting to be painted. I love pouring my heart and soul into my work,
          creating websites that not only function flawlessly but also leave a
          lasting impression on anyone who visits them. Want to connect? Hit me
          up on my socials!
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};
