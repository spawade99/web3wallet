// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ArrowDownIcon, ArrowUpIcon, CopyIcon, RefreshCwIcon } from "lucide-react"

// export default function CryptoWallet() {
//     return (
//         <div className="min-h-screen bg-gray-100 p-4 dark:bg-gray-900">
//             <Card className="mx-auto max-w-2xl">
//                 <CardHeader>
//                     <CardTitle className="text-2xl font-bold">Crypto Wallet</CardTitle>
//                     <CardDescription>Manage your cryptocurrency assets</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                     <div className="mb-6 text-center">
//                         <h2 className="text-3xl font-bold">$12,345.67</h2>
//                         <p className="text-sm text-muted-foreground">Total Balance</p>
//                     </div>
//                     <div className="mb-6 flex justify-center space-x-4">
//                         <Button className="w-32">
//                             <ArrowUpIcon className="mr-2 h-4 w-4" />
//                             Send
//                         </Button>
//                         <Button className="w-32">
//                             <ArrowDownIcon className="mr-2 h-4 w-4" />
//                             Receive
//                         </Button>
//                     </div>
//                     <Tabs defaultValue="assets" className="w-full">
//                         <TabsList className="grid w-full grid-cols-2">
//                             <TabsTrigger value="assets">Assets</TabsTrigger>
//                             <TabsTrigger value="activity">Activity</TabsTrigger>
//                         </TabsList>
//                         <TabsContent value="assets">
//                             <div className="space-y-4">
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center space-x-2">
//                                         <div className="h-8 w-8 rounded-full bg-orange-500" />
//                                         <div>
//                                             <p className="font-medium">Bitcoin</p>
//                                             <p className="text-sm text-muted-foreground">BTC</p>
//                                         </div>
//                                     </div>
//                                     <div className="text-right">
//                                         <p className="font-medium">0.5234 BTC</p>
//                                         <p className="text-sm text-muted-foreground">$10,468.00</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center space-x-2">
//                                         <div className="h-8 w-8 rounded-full bg-blue-500" />
//                                         <div>
//                                             <p className="font-medium">Ethereum</p>
//                                             <p className="text-sm text-muted-foreground">ETH</p>
//                                         </div>
//                                     </div>
//                                     <div className="text-right">
//                                         <p className="font-medium">2.4567 ETH</p>
//                                         <p className="text-sm text-muted-foreground">$1,877.67</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </TabsContent>
//                         <TabsContent value="activity">
//                             <div className="space-y-4">
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <p className="font-medium">Received Bitcoin</p>
//                                         <p className="text-sm text-muted-foreground">From: 0x1234...5678</p>
//                                     </div>
//                                     <div className="text-right">
//                                         <p className="font-medium text-green-600">+0.1 BTC</p>
//                                         <p className="text-sm text-muted-foreground">2 hours ago</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <p className="font-medium">Sent Ethereum</p>
//                                         <p className="text-sm text-muted-foreground">To: 0x8765...4321</p>
//                                     </div>
//                                     <div className="text-right">
//                                         <p className="font-medium text-red-600">-0.5 ETH</p>
//                                         <p className="text-sm text-muted-foreground">1 day ago</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </TabsContent>
//                     </Tabs>
//                     <div className="mt-6">
//                         <Label htmlFor="wallet-address">Your Wallet Address</Label>
//                         <div className="mt-1 flex">
//                             <Input id="wallet-address" value="0x742d35Cc6634C0532925a3b844Bc454e4438f44e" readOnly />
//                             <Button variant="outline" className="ml-2">
//                                 <CopyIcon className="h-4 w-4" />
//                             </Button>
//                         </div>
//                     </div>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { generateMnemonic, validateMnemonic } from 'ethers';

// Crypto wallet types
interface WalletKeys {
    seedPhrase: string;
    privateKey: string;
    publicKey: string;
}

const CryptoWalletApp: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<'landing' | 'wallet' | 'create-wallet'>('landing');
    const [walletKeys, setWalletKeys] = useState<WalletKeys | null>(null);
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const generateNewWallet = () => {
        const seedPhrase = ""//generateMnemonic();
        // Note: In a real implementation, use proper key derivation
        const privateKey = `0x${Math.random().toString(16).slice(2)}`;
        const publicKey = `0x${Math.random().toString(16).slice(2)}`;

        setWalletKeys({
            seedPhrase,
            privateKey,
            publicKey
        });
    };

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const renderLandingPage = () => (
        <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground">
            <h1 className="text-4xl font-bold mb-6">Crypto Wallet</h1>
            <div className="space-y-4">
                <Button
                    onClick={() => setCurrentPage('create-wallet')}
                    className="w-full"
                >
                    Create New Wallet
                </Button>
                <Button
                    variant="outline"
                    className="w-full"
                >
                    Import Existing Wallet
                </Button>
            </div>
        </div>
    );

    const renderCreateWalletPage = () => (
        <div className="min-h-screen bg-background text-foreground p-6">
            <h2 className="text-2xl font-bold mb-6">Create New Wallet</h2>

            {!walletKeys ? (
                <Button onClick={generateNewWallet}>
                    Generate Seed Phrase
                </Button>
            ) : (
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Wallet Keys</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="block mb-2">Seed Phrase</label>
                            <div className="flex items-center">
                                <Input
                                    value={walletKeys.seedPhrase}
                                    readOnly
                                    className="mr-2"
                                />
                                <Button
                                    onClick={() => copyToClipboard(walletKeys.seedPhrase, 'seedPhrase')}
                                >
                                    {copiedField === 'seedPhrase' ? 'Copied!' : 'Copy'}
                                </Button>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2">Private Key</label>
                            <div className="flex items-center">
                                <Input
                                    value={walletKeys.privateKey}
                                    readOnly
                                    className="mr-2"
                                />
                                <Button
                                    onClick={() => copyToClipboard(walletKeys.privateKey, 'privateKey')}
                                >
                                    {copiedField === 'privateKey' ? 'Copied!' : 'Copy'}
                                </Button>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2">Public Key</label>
                            <div className="flex items-center">
                                <Input
                                    value={walletKeys.publicKey}
                                    readOnly
                                    className="mr-2"
                                />
                                <Button
                                    onClick={() => copyToClipboard(walletKeys.publicKey, 'publicKey')}
                                >
                                    {copiedField === 'publicKey' ? 'Copied!' : 'Copy'}
                                </Button>
                            </div>
                        </div>

                        <Button
                            variant="destructive"
                            onClick={() => {
                                // Warning: In a real app, this would require additional security measures
                                setWalletKeys(null);
                            }}
                        >
                            Reset Wallet
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );

    const renderWalletPage = () => (
        <div className="min-h-screen bg-background text-foreground p-6">
            {/* Your existing wallet dashboard content */}
        </div>
    );

    return (
        <div>
            {currentPage === 'landing' && renderLandingPage()}
            {/* {currentPage === 'create-wallet' && renderCreateWalletPage()} */}
            {/* {currentPage === 'wallet' && renderWalletPage()} */}
        </div>
    );
};

export default CryptoWalletApp;