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
  const location = useLocation();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    const body = document.body;
    body.classList.toggle("dark-mode");
  };
  
  // Function to determine whether to show the switch or not based on the route
  const showSwitch = () => {
    const { pathname } = location;
    return !pathname.includes("/404");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Routes>
          <Route path="/" element={<Homepage darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route
            path="/projects"
            element={<Projects darkMode={darkMode} />}
          />
          <Route path="/404" element={<Notfound />} />
        </Routes>
        {/* Render the switch outside the Routes component */}
        {showSwitch() && (
          <div className="dark-mode-switch" onClick={toggleDarkMode}>
            <Switch
              checked={darkMode}
              onChange={() => {}}
              name="darkModeSwitch"
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
