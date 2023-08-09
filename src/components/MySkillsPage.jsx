import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import styled from "styled-components";
import { Design, Develope, Cog } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { PowerButton } from "../subComponents/PowerButton";
import { ParticleComponent } from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 40vw;
    margin-top: 20%;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.2rem + 1vw);
  /* font-size: 20px; */
  padding: 0.5rem 0;
  overflow: hidden;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }

  @media (max-width: 1100px) {
    font-size: calc(0.4rem + 1vw);
  }

  @media (max-width: 768px) {
    font-size: calc(0.8rem + 1vw);
  }
  @media (max-height: 768px) {
    font-size: calc(0.2rem + 1vw);
  }
`;

export const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="lightTheme" />
        <SocialIcons theme="lightTheme" />
        <PowerButton />
        <ParticleComponent theme="light" />

        {/* FS CARD */}
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Full Stack
          </Title>
          <Description>
            {/* My design philosophy revolves around simplicity, minimalism, and
            cleanliness to ensure that the websites message is delivered
            effectively and clearly. */}
            I have the expertise to design and develop all aspects of web
            applications. With a focus on simplicity, minimalism, and
            cleanliness to ensure that the website is delivered effectively and
            clearly.
          </Description>

          <Description>
            <strong>Front-End</strong>
            <ul>
              <li>HTML</li>
              <li>CSS, Tailwind, styled-components</li>
              <li>Javascript, React.js</li>
              <li>Redux Tool-kit</li>
            </ul>
          </Description>
          <Description>
            <strong>Back-end</strong>
            <ul>
              <li>Node.js</li>
              <li>Firebase</li>
              <li>MySQL</li>
              <li>Strapi CMS</li>
            </ul>
          </Description>
        </Main>

        {/* TOOLS CARD */}
        <Main>
          <Title>
            {/* <Design width={40} height={40} /> */}
            <Cog width={40} height={40} />
            TOOLS
          </Title>
          <Description>
            I utilize a range of applications to streamline and enhance my web
            development process. These help me deliver high-quality and
            efficient web solutions that meet the needs and expectations of my
            clients and users
          </Description>
          <Description>
            <strong>Project Management</strong>
            <ul>
              <li>Visual Studio Code</li>
              <li>GitHub, Git</li>
              <li>One drive</li>
              <li>Trello, Slack, Teams</li>
            </ul>
          </Description>
          <Description>
            <strong>Agile Methodologies</strong>
            <ul>
              <li>Scrum</li>
              <li>Kanban</li>
            </ul>
          </Description>
        </Main>

        {/* <Main>
          <Description>Fuck</Description>
        </Main> */}
        <BigTitle
          text="SKILLS"
          top="85%"
          right="10%"
          color="rgba(0, 0, 0, 0.2)"
        />
      </Box>
    </ThemeProvider>
  );
};
