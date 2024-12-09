import { useState } from 'react'
import { generateMnemonic } from 'bip39';
import WallcroLogo from './components/wallcro-logo';

function App() {
  const [mnemonics, setMnemonics] = useState<string[]>(["picnic", " power", " amazing", " smart", " review", "steak", " vessel", " security", " talent", " minor", " narrow", " analyst"]);

  const generateMnemonics = () => {
    const mnemonic = generateMnemonic();
    console.log(mnemonic);
    const mnemonics = mnemonic.split(' ');
    setMnemonics(mnemonics);
  };

  return (
    // <div className="flex flex-col min-h-screen bg-slate-100  ">
    //   {/* < ModeToggle />
    //   <div className=''>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Generate Mnemonics</CardTitle>
    //         <CardContent>
    //           <Button onClick={generateMnemonics}>Generate Mnemonics</Button>
    //           <br />
    //           <CardContent>

    //             <div className='flex flex-wrap'>
    //               {mnemonics.map((mnemonic, index) => {
    //                 return <Button className='flex-row gap-5 m-2' key={index}>{mnemonic}</Button>

    //               })}
    //             </div>
    //           </CardContent>
    //           <SolanaWallet mnemonic={mnemonics.join(' ')} />
    //         </CardContent>
    //       </CardHeader>
    //     </Card>
    //     <h1 className='flex'>Test</h1>
    //   </div> */}

    <div className='flex flex-col bg-zinc-400 h-screen w-screen p-3 justify-between' >
      <div className='flex justify-between items-center flex-row bg-slate-300 top-2 basis-1/6'>
        {/* <div className="grid grid-cols-4 gap-4 mt-4 justify-center items-center">
        <div className="bg-slate-500 br- border-red-400 p-3 ">01</div>
        <div className="bg-slate-500 br- border-red-400 p-3 ">02</div>
        <div className="bg-slate-500 br- border-red-400 p-3 ">03</div>
        <div className="bg-slate-500 br- border-red-400 p-3 ">01</div>
        <div className="bg-slate-500 br- border-red-400 p-3 ">02</div>
        <div className="bg-slate-500 br- border-red-400 p-3 ">03</div>
      </div> */}
        <div >
          {/* <FontAwesomeIcon icon="fa-solid fa-sack-dollar" /> */}
          <WallcroLogo width={300} height={90} color="#10B981" />
        </div>
        <div className='flex align-middle justify-between gap-3  items-center rounded-lg p-4 m-4 border-2 border-red-700 border-spacing-3'>
          <div className='bg-slate-400 border-5 border-t-rose-400 rounded-lg p-3 '>Flex childs</div>
          <div className='bg-slate-400 border-5 border-t-rose-400 rounded-lg p-3 '>Flex childs</div>
          <div className='bg-slate-400 border-5 border-t-rose-400 rounded-lg p-3 '>Flex childs</div>
          <div className='bg-slate-400 border-5 border-t-rose-400 rounded-lg p-3 '>Flex childs</div>
        </div>
      </div>
      <div className='flex items-center justify-center text-white bg-gray-800 basis-3/4 p-6'>

        <div className="flex">
          <div className="w-24 h-24 bg-blue-500
                    flex justify-center 
                    items-center mr-6">
            <span>element1</span></div>
          <div className="w-24 h-24 bg-red-500
                    flex justify-center
                    items-center mr-6">
            <span>element2</span></div>
        </div>
        {/* Adding Vertical Space --> */}
        <div className="flex justify-center
                items-center mt-6">
          <div className="w-24 h-24 bg-blue-500
                    flex justify-center 
                    items-center mb-6">
            <span>element4</span></div>
          <div className="w-24 h-24 bg-red-500 
                    flex justify-center 
                    items-center mb-6">
            <span>element5</span></div>

        </div>
      </div>
      <div className='bg-orange-400 basis-1/6 p-6'>
        footer
      </div>
    </div >
    // <div className=''>
    //   <CryptoWallet />
    // </div>
  );
}

export default App
