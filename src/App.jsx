import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { generateMnemonic, getDefaultWordlist } from 'bip39';

function App() {
  const [mnemonics, setMnemonics] = useState('')
  // useEffect(() => {
  //   generateMnemonic().then((mnemonic) => { console.log(mnemonic) });
  // }, []);

  const generateMnemonics = () => {
    const mnemonic = generateMnemonic();
    console.log(mnemonic);
    setMnemonics(mnemonic);
  }

  return (
    <div className="App">
      <button onClick={generateMnemonics}>Generate Mnemonics</button>
      <input type="text" value={mnemonics} readOnly />
    </div>
  )
}

export default App
