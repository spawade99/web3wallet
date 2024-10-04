import { useState } from "react"
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

export function SolanaWallet({ mnemonic }: { mnemonic: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [publicKeys, setPublicKeys] = useState<PublicKey[]>([]);
    const [keyPairs, setKeyPairs] = useState<Keypair[]>([]);

    return <div key={'solana-wallet'}>
        <button key={'generateWallet'} onClick={async function () {
            const seed = await mnemonicToSeed(mnemonic);
            console.log(mnemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);
            setCurrentIndex(currentIndex + 1);
            // setPublicKeys([...publicKeys, keypair.publicKey]);
            setKeyPairs([...keyPairs, keypair]);
        }}>
            Add wallet
        </button>
        {keyPairs.map((p, index) => <div>
            <li key={index}>
                <ul key={`pubk-${index}`}>public key</ul>
                {p.publicKey.toBase58()}
                <ul key={`prvk-${index}`}>Secret Key</ul>
                {p.secretKey.toString()}

            </li>

        </div>)}
    </div>
}