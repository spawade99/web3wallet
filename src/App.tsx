import { useState } from 'react'
import './App.css'
import { generateMnemonic } from 'bip39';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import CryptoWallet from './CryptoWallet';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { SolanaWallet } from './SolanaWallet';

function App() {
  const [mnemonics, setMnemonics] = useState<string[]>([]);

  const generateMnemonics = () => {
    const mnemonic = generateMnemonic();
    console.log(mnemonic);
    const mnemonics = mnemonic.split(' ');
    setMnemonics(mnemonics);
  };

  return (
    <div className='App'>

      <Card>
        <CardHeader>
          <CardTitle>Generate Mnemonics</CardTitle>
          <CardContent>
            <Button onClick={generateMnemonics}>Generate Mnemonics</Button>
            <br />
            {mnemonics.map((mnemonic, index) => {
              return <Card ><CardContent><p key={index}>{mnemonic}</p></CardContent></Card>

            })}
            <SolanaWallet mnemonic={mnemonics.join(' ')} />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
    // <div className=''>
    //   <CryptoWallet />
    // </div>
  );
}

export default App
