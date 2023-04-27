import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router";
import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";
import { GlobalStyle } from "./globalStyles";

// COMPONENTS
import { Main } from "./components/Main";
import { AboutPage } from "./components/AboutPage";
import { BlogPage } from "./components/BlogPage";
import { WorkPage } from "./components/WorkPage";
import { MySkillsPage } from "./components/MySkillsPage";

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/work" element={<WorkPage />} />
          <Route exact path="/skills" element={<MySkillsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
