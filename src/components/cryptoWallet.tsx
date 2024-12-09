// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// // Types for wallet and transaction
// interface Cryptocurrency {
//     symbol: string;
//     name: string;
//     balance: number;
//     usdValue: number;
// }

// interface Transaction {
//     id: string;
//     type: 'send' | 'receive';
//     amount: number;
//     symbol: string;
//     timestamp: Date;
//     address: string;
// }

// const CryptoWallet: React.FC = () => {
//     const [cryptoAssets, setCryptoAssets] = useState<Cryptocurrency[]>([
//         { symbol: 'BTC', name: 'Bitcoin', balance: 0.5, usdValue: 30000 },
//         { symbol: 'ETH', name: 'Ethereum', balance: 3.2, usdValue: 2000 },
//         { symbol: 'USDC', name: 'USD Coin', balance: 1500, usdValue: 1 }
//     ]);

//     const [transactions, setTransactions] = useState<Transaction[]>([
//         {
//             id: '1',
//             type: 'receive',
//             amount: 0.1,
//             symbol: 'BTC',
//             timestamp: new Date(),
//             address: 'bc1qExample123'
//         }
//     ]);

//     const [selectedCrypto, setSelectedCrypto] = useState<Cryptocurrency | null>(null);

//     const totalPortfolioValue = cryptoAssets.reduce(
//         (total, asset) => total + (asset.balance * asset.usdValue),
//         0
//     );

//     return (
//         <div className="bg-background text-foreground min-h-screen p-6">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-3xl font-bold mb-6 flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
//                         <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
//                     </svg>
//                     Crypto Wallet
//                 </h1>

//                 {/* Portfolio Overview */}
//                 <Card className="mb-6">
//                     <CardHeader>
//                         <CardTitle>Portfolio Value</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="text-4xl font-semibold">
//                             ${totalPortfolioValue.toLocaleString()}
//                         </div>
//                     </CardContent>
//                 </Card>

//                 {/* Asset List */}
//                 <Card className="mb-6">
//                     <CardHeader>
//                         <CardTitle>Your Assets</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         {cryptoAssets.map((asset) => (
//                             <div
//                                 key={asset.symbol}
//                                 className="flex justify-between items-center py-3 border-b"
//                             >
//                                 <div>
//                                     <div className="font-semibold">{asset.name}</div>
//                                     <div className="text-sm text-muted-foreground">{asset.symbol}</div>
//                                 </div>
//                                 <div className="text-right">
//                                     <div>{asset.balance} {asset.symbol}</div>
//                                     <div className="text-sm text-muted-foreground">
//                                         ${(asset.balance * asset.usdValue).toLocaleString()}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </CardContent>
//                 </Card>

//                 {/* Transactions */}
//                 <Card>
//                     <CardHeader>
//                         <CardTitle>Recent Transactions</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         {transactions.map((tx) => (
//                             <div
//                                 key={tx.id}
//                                 className="flex justify-between items-center py-3 border-b"
//                             >
//                                 <div className="flex items-center">
//                                     {tx.type === 'receive' ? (
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <line x1="12" y1="5" x2="12" y2="19"></line>
//                                             <polyline points="19 12 12 19 5 12"></polyline>
//                                         </svg>
//                                     ) : (
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <line x1="12" y1="19" x2="12" y2="5"></line>
//                                             <polyline points="5 12 12 5 19 12"></polyline>
//                                         </svg>
//                                     )}
//                                     <div>
//                                         <div>{tx.type === 'receive' ? 'Received' : 'Sent'}</div>
//                                         <div className="text-sm text-muted-foreground">{tx.address}</div>
//                                     </div>
//                                 </div>
//                                 <div className="text-right">
//                                     <div>{tx.amount} {tx.symbol}</div>
//                                     <div className="text-sm text-muted-foreground">
//                                         {tx.timestamp.toLocaleDateString()}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     );
// };

// export default CryptoWallet;

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
        // <div className="min-h-screen bg-background text-foreground p-6">
        <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground">
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

    // const renderWalletPage = () => (
    //     <div className="min-h-screen bg-background text-foreground p-6">
    //         <div className="bg-background text-foreground min-h-screen p-6">
    //             <div className="max-w-4xl mx-auto">
    //                 <h1 className="text-3xl font-bold mb-6 flex items-center">
    //                     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                         <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    //                         <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    //                     </svg>
    //                     Crypto Wallet
    //                 </h1>

    //                 {/* Portfolio Overview */}
    //                 <Card className="mb-6">
    //                     <CardHeader>
    //                         <CardTitle>Portfolio Value</CardTitle>
    //                     </CardHeader>
    //                     <CardContent>
    //                         <div className="text-4xl font-semibold">
    //                             ${totalPortfolioValue.toLocaleString()}
    //                         </div>
    //                     </CardContent>
    //                 </Card>

    //                 {/* Asset List */}
    //                 <Card className="mb-6">
    //                     <CardHeader>
    //                         <CardTitle>Your Assets</CardTitle>
    //                     </CardHeader>
    //                     <CardContent>
    //                         {cryptoAssets.map((asset) => (
    //                             <div
    //                                 key={asset.symbol}
    //                                 className="flex justify-between items-center py-3 border-b"
    //                             >
    //                                 <div>
    //                                     <div className="font-semibold">{asset.name}</div>
    //                                     <div className="text-sm text-muted-foreground">{asset.symbol}</div>
    //                                 </div>
    //                                 <div className="text-right">
    //                                     <div>{asset.balance} {asset.symbol}</div>
    //                                     <div className="text-sm text-muted-foreground">
    //                                         ${(asset.balance * asset.usdValue).toLocaleString()}
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </CardContent>
    //                 </Card>

    //                 {/* Transactions */}
    //                 <Card>
    //                     <CardHeader>
    //                         <CardTitle>Recent Transactions</CardTitle>
    //                     </CardHeader>
    //                     <CardContent>
    //                         {transactions.map((tx) => (
    //                             <div
    //                                 key={tx.id}
    //                                 className="flex justify-between items-center py-3 border-b"
    //                             >
    //                                 <div className="flex items-center">
    //                                     {tx.type === 'receive' ? (
    //                                         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                                             <line x1="12" y1="5" x2="12" y2="19"></line>
    //                                             <polyline points="19 12 12 19 5 12"></polyline>
    //                                         </svg>
    //                                     ) : (
    //                                         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                                             <line x1="12" y1="19" x2="12" y2="5"></line>
    //                                             <polyline points="5 12 12 5 19 12"></polyline>
    //                                         </svg>
    //                                     )}
    //                                     <div>
    //                                         <div>{tx.type === 'receive' ? 'Received' : 'Sent'}</div>
    //                                         <div className="text-sm text-muted-foreground">{tx.address}</div>
    //                                     </div>
    //                                 </div>
    //                                 <div className="text-right">
    //                                     <div>{tx.amount} {tx.symbol}</div>
    //                                     <div className="text-sm text-muted-foreground">
    //                                         {tx.timestamp.toLocaleDateString()}
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </CardContent>
    //                 </Card>
    //             </div>
    //         </div>
    //     </div>
    // );
    const renderWalletPage = () => (<></>)
    return (
        <div>
            {currentPage === 'landing' && renderLandingPage()}
            {currentPage === 'create-wallet' && renderCreateWalletPage()}
            {currentPage === 'wallet' && renderWalletPage()}
        </div>
    );
};

export default CryptoWalletApp;
function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground">
            <h1 className="text-4xl font-bold mb-6">Crypto Wallet</h1>
            <div className="space-y-4">
                <Button
                    onClick={() => setCurr('create-wallet')}
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
    )
}