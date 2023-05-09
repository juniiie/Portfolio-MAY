import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router";
import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";
import { GlobalStyle } from "./globalStyles";
import { AnimatePresence } from "framer-motion";

// COMPONENTS
import { Main } from "./components/Main";
import { AboutPage } from "./components/AboutPage";
import { WorkPage } from "./components/WorkPage";
import { MySkillsPage } from "./components/MySkillsPage";

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/work" element={<WorkPage />} />
            <Route exact path="/skills" element={<MySkillsPage />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
