import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      {/* other components here */}
    </div>
  );
}

export default App;
