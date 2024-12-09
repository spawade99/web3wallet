import { useState } from 'react'
import { generateMnemonic } from 'bip39';
import WallcroLogo from './components/wallcro-logo';
import { Button } from './components/ui/button';
import { Label } from './components/ui/label';
import SeedCard from './components/SeedCard';
import { Collapsible } from './components/ui/collapsible';

function App() {
  const [mnemonics, setMnemonics] = useState<string[]>(["picnic", " power", " amazing", " smart", " review", "steak", " vessel", " security", " talent", " minor", " narrow", " analyst"]);

  const generateMnemonics = () => {
    const mnemonic = generateMnemonic();
    console.log(mnemonic);
    const mnemonics = mnemonic.split(' ');
    setMnemonics(mnemonics);
  };

  return (
    <div className='flex flex-col bg-[#030637] h-screen w-screen p-3 justify-between' >
      <div className='flex justify-center items-center h-full flex-col '>
        <WallcroLogo className='ml-3' height={90} color="#921A40" />
        <div className='flex  flex-col items-center'>
          <Label className='text-4xl text-white text-ellipsis'>Welcome</Label>
          <Label className='text-2xl text-white text-ellipsis'> to </Label>
          <Label className='text-4xl text-white text-ellipsis'>Crypto-Purse</Label>
          <Label className='m-2 text-2xl '>Let's Get Started</Label >
        </div>
        <div className='flex flex-col gap-3 m-3'>
          <Button variant={'outline'}>Create New Wallet</Button>
          <Button variant={'outline'} >Import Wallet</Button>
        </div>

        <SeedCard />
      </div>

      {/* <div className='bg-orange-400 basis-1/6 p-6'>
        footer
      </div> */}
    </div >
    // <div className=''>
    //   <CryptoWallet />
    // </div>

  );
}

// export default App
// import { useRef, useState, useEffect } from 'react'
// import './App.css'

// export const usePrev = (value) => {
//   console.log('Prevalue', value);
//   const ref = useRef();

//   // Update the ref with the current value after each render
//   useEffect(() => {
//     ref.current = value;
//   }, [value]);

//   // Return the previous value (current value of ref before it is updated)
//   return ref.current;
// };

// function App() {
//   const [count, setCount] = useState(0);
//   const prevCount = usePrev(count); // Track the previous count value
//   useEffect(() => { console.log('count', count) }, [count])
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Counter with usePrev Hook</h1>
//       <p>Current Count: {count}</p>
//       <p>Previous Count: {prevCount}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
//     </div>
//   );
// }

export default App
