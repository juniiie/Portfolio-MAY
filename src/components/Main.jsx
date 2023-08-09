import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { PowerButton } from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import { Intro } from "./Intro";
import { lightTheme, darkTheme } from "./Themes";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
  a {
    /* color: inherit; */

    text-decoration: none;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: inherit;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

  a {
    color: ${(props) => props.theme.text};
  }
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  background: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  left: calc(1.3rem + 2vw);
  /* left: calc(1rem + 2vw); */
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  /* color: red; */
  /* background: none; */
  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

// YIN YANG
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "50%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    display: ${(props) => (props.click ? "none%" : "inline-block%")};
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #000;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

export const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "darkTheme" : "lightTheme"} />
        <SocialIcons theme={click ? "darkTheme" : "lightTheme"} />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click me &uarr;</span>
        </Center>

        {/* MAKE THE EMAIL FUNCTION WORK */}
        <Contact target="_blank" href="mailto:codebucks27@gmail.com">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="mailto:climsonjr@gmail.com">Say hi...</a>
          </motion.h2>
        </Contact>

        {/* WORK */}
        <WORK to="/work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work.
          </motion.h2>
        </WORK>

        {/* BOTTOM BAR */}
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};
