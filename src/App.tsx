import React, { ChangeEvent, useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

function App() {
  const [currentInput, setInput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <textarea className="MarkdownEnter" placeholder="Enter text to be marked down here..." value={currentInput} onChange={handleInputChange}></textarea>
      
      <div className="MarkdownOutput">
        <ReactMarkdown children={ currentInput } />
      </div>
    </div>
  );
}

export default App;