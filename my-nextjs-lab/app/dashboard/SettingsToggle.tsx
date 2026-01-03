'use client';

import { useState } from 'react';

export default function SettingsToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const panelStyles = {
    padding: '20px',
    marginTop: '20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    // Logic Dark/Light mode cho dashboard panel
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={panelStyles}>
      <h3 style={{ marginTop: 0 }}>Panel Settings (Client Component)</h3>
      <p>Current Mode: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong></p>
      
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '5px',
          backgroundColor: isDarkMode ? '#fff' : '#000',
          color: isDarkMode ? '#000' : '#fff',
          border: 'none',
          fontWeight: 'bold'
        }}
      >
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}