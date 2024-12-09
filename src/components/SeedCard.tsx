import React, { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Button } from './ui/button';
import { ChevronsUpDown, ClipboardCopyIcon, Terminal } from 'lucide-react';
import { Badge } from './ui/badge';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

const SeedCard = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [seed, setSeed] = useState<string[]>(["picnic", " power", " amazing", " smart", " review", "steak", " vessel", " security", " talent", " minor", " narrow", " analyst"]);
    return (
        <div className='border-red-300 border p-4'>
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className=' space-y-4 flex flex-col'>
                <CollapsibleTrigger className='flex flex-row'>
                    <Alert>
                        <AlertTitle className='flex justify-between'>
                            <span>Heads up!</span>
                            <ClipboardCopyIcon className="h-4 w-4" />
                        </AlertTitle>
                        <AlertDescription>
                            You can't access and recover this seeds once closed, copy and store securly.
                        </AlertDescription>
                    </Alert>
                    <Button variant="ghost" size="lg" className=" w-9 p-0">

                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>



                <CollapsibleContent>
                    <div className='flex flex-row gap-3 flex-wrap'>
                        {seed.map((mnemonic, index) => {
                            return <Button key={index} size={'lg'} className='p-2 text-xl'>{mnemonic}</Button>
                        })}
                    </div>
                </CollapsibleContent>


            </Collapsible>
        </div>
    )
}

export default SeedCard
