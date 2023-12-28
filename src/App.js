// App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
    setDarkMode((prevMode) => !prevMode);
    const body = document.body;

    // Toggle dark mode class on the body element
    if (darkMode) {
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <div className="dark-mode-switch">
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            name="darkModeSwitch"
          />
        </div>

        <Routes>
          <Route
            path="/"
            element={<Homepage darkMode={darkMode} />} // Pass darkMode as a prop
          />
          <Route
            path="/about"
            element={<About darkMode={darkMode} />} // Pass darkMode as a prop
          />
          <Route
            path="/projects"
            element={<Projects darkMode={darkMode} />} // Pass darkMode as a prop
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
