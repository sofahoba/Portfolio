import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SoftSkills from "./components/SoftSkills";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  transition: all 0.5s linear;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    setMountedComponent(true);
    // Optional: set theme based on user's system preference
    // const localTheme = window.localStorage.getItem('theme');
    // localTheme && setTheme(localTheme);
    // OR
    // const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // if (prefersDark) {
    //   setTheme('dark');
    // }
  }, []);

  if (!mountedComponent) return <div />; // Prevent FOUC

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <Header theme={theme} toggleTheme={themeToggler} />
        <main>
          <About />
          <Skills />
          <Projects />
          <SoftSkills />
        </main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
