// App.js
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Notfound from "./pages/404";
import "./app.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    // Update the state based on the previous state
    setDarkMode((prevMode) => !prevMode);

    // Add/remove the 'dark-mode' class on the body element
    const body = document.body;
    body.classList.toggle("dark-mode");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DarkModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Homepage darkMode={darkMode} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <DarkModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <About darkMode={darkMode} />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <DarkModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Projects darkMode={darkMode} />
              </>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

const DarkModeSwitch = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-switch" onClick={toggleDarkMode}>
      <Switch
        checked={darkMode}
        onChange={() => {}} // Handle onChange in the switch itself
        name="darkModeSwitch"
      />
    </div>
  );
};

export default App;
