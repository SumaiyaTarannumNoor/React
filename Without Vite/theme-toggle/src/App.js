import React, {useContext} from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';

function ThemeToggle(){
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  return (
    <div style={{background: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#333"}}>
    <h1>
      Theme Toggle
    </h1>
    <button onClick={toggleTheme}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
    </div>
  )
 }
  function App(){
    return(
      <ThemeProvider>
        <ThemeToggle/>
      </ThemeProvider>
    )
 
}

export default App;