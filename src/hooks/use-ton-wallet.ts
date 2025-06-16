import { useTonConnectUI, useTonWallet, Wallet, WalletInfoWithOpenMethod } from '@tonconnect/ui-react';

export const useWallet = () => {
	const [tonConnectUI] = useTonConnectUI();
	const wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null = useTonWallet();

	const address: string = wallet?.account.address ?? '';
	const shortAddress = wallet?.account.address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null;

	const connect = () => {
		if (wallet) tonConnectUI.openModal();
	};

	const disconnect = () => {
		if (!wallet) tonConnectUI.openModal();
	};

	return { address, shortAddress, wallet, connect, disconnect };
};
