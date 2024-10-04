import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDownIcon, ArrowUpIcon, CopyIcon, RefreshCwIcon } from "lucide-react"

export default function CryptoWallet() {
    return (
        <div className="min-h-screen bg-gray-100 p-4 dark:bg-gray-900">
            <Card className="mx-auto max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Crypto Wallet</CardTitle>
                    <CardDescription>Manage your cryptocurrency assets</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-6 text-center">
                        <h2 className="text-3xl font-bold">$12,345.67</h2>
                        <p className="text-sm text-muted-foreground">Total Balance</p>
                    </div>
                    <div className="mb-6 flex justify-center space-x-4">
                        <Button className="w-32">
                            <ArrowUpIcon className="mr-2 h-4 w-4" />
                            Send
                        </Button>
                        <Button className="w-32">
                            <ArrowDownIcon className="mr-2 h-4 w-4" />
                            Receive
                        </Button>
                    </div>
                    <Tabs defaultValue="assets" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="assets">Assets</TabsTrigger>
                            <TabsTrigger value="activity">Activity</TabsTrigger>
                        </TabsList>
                        <TabsContent value="assets">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="h-8 w-8 rounded-full bg-orange-500" />
                                        <div>
                                            <p className="font-medium">Bitcoin</p>
                                            <p className="text-sm text-muted-foreground">BTC</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">0.5234 BTC</p>
                                        <p className="text-sm text-muted-foreground">$10,468.00</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="h-8 w-8 rounded-full bg-blue-500" />
                                        <div>
                                            <p className="font-medium">Ethereum</p>
                                            <p className="text-sm text-muted-foreground">ETH</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">2.4567 ETH</p>
                                        <p className="text-sm text-muted-foreground">$1,877.67</p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="activity">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Received Bitcoin</p>
                                        <p className="text-sm text-muted-foreground">From: 0x1234...5678</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-green-600">+0.1 BTC</p>
                                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Sent Ethereum</p>
                                        <p className="text-sm text-muted-foreground">To: 0x8765...4321</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-red-600">-0.5 ETH</p>
                                        <p className="text-sm text-muted-foreground">1 day ago</p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                    <div className="mt-6">
                        <Label htmlFor="wallet-address">Your Wallet Address</Label>
                        <div className="mt-1 flex">
                            <Input id="wallet-address" value="0x742d35Cc6634C0532925a3b844Bc454e4438f44e" readOnly />
                            <Button variant="outline" className="ml-2">
                                <CopyIcon className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}