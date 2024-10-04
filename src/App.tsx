import { useState } from 'react'
import './App.css'
import { generateMnemonic } from 'bip39';

function App() {
  const [mnemonics, setMnemonics] = useState("");

  const generateMnemonics = () => {
    const mnemonic = generateMnemonic();
    console.log(mnemonic);
    setMnemonics(mnemonic);
  };

  return (
    <div className='App'>
      <button onClick={generateMnemonics}>Generate Mnemonics</button>
      <input type='text' value={mnemonics} readOnly />
    </div>
  );
}

export default App
