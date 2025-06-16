// transfer.ts

import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;

import { Address, TonClient, WalletContractV4, beginCell, internal, toNano, Cell } from '@ton/ton';
import { mnemonicToPrivateKey, KeyPair } from '@ton/crypto';

// --- CONFIG TYPES ---
const TON_ENDPOINT: string = process.env.TON_ENDPOINT as string;
const USDT_JETTON_ADDRESS: string = process.env.USDT_JETTON_ADDRESS as string;
const MNEMONIC: string[] = process.env.TON_WALLET_MNEMONIC!.split(' ');

// --- CLIENT SINGLETON ---
const client: TonClient = new TonClient({ endpoint: TON_ENDPOINT });

// --- WALLET KEY & CONTRACT ---
let keyPair: KeyPair | null = null;
let serverWallet: WalletContractV4 | null = null;

/**
 * Init wallet key and contract once
 */
const initWallet = async (): Promise<void> => {
	if (!keyPair) {
		keyPair = await mnemonicToPrivateKey(MNEMONIC);
		serverWallet = WalletContractV4.create({
			workchain: 0,
			publicKey: keyPair.publicKey,
		});
	}
};

/**
 * Build Jetton Transfer Payload
 */
const buildJettonTransfer = ({ to, amount }: { to: string; amount: bigint }): Cell => {
	return beginCell()
		.storeUint(0xf8a7ea5, 32) // OP code: transfer
		.storeUint(0, 64) // query_id
		.storeCoins(amount)
		.storeAddress(Address.parse(to))
		.storeAddress(Address.parse(to))
		.storeBit(0) // no custom payload
		.storeCoins(toNano('0.05')) // forward TON for rent
		.storeBit(0) // no forward payload
		.endCell();
};

/**
 * Public transfer function
 */
export const transfer = async ({ address, amount = 0 }: { address: string; amount: number }): Promise<void> => {
	// Initialize key & contract if needed
	await initWallet();
	if (!serverWallet || !keyPair) {
		throw new Error('Failed to initialize server wallet');
	}

	const serverWalletContract = client.open(serverWallet);

	const seqno = await serverWalletContract.getSeqno();

	const payload = buildJettonTransfer({
		to: address,
		amount: toNano(amount), // nano USDT
	});

	// Send internal message to Jetton contract
	await serverWalletContract.sendTransfer({
		seqno,
		secretKey: keyPair.secretKey,
		messages: [
			internal({
				to: Address.parse(USDT_JETTON_ADDRESS),
				value: toNano('0.1'), // TON for gas
				body: payload,
			}),
		],
	});
};
