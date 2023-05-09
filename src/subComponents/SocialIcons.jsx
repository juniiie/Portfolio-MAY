import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import {
  Facebook,
  Github,
  Twitter,
  YouTube,
  Linkedin,
} from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/juniiie"}
        >
          <Github
            width={28}
            height={28}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>

      {/* LINKEDIN */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://www.linkedin.com/in/climsonjr/"}
        >
          <Linkedin
            width={50}
            height={50}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>

      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a style={{ color: "inherit" }} target="_blank" href={"#"}>
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://facebook.com/codebucks27"}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://youtube.com"}
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div> */}

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
