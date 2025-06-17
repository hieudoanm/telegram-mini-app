export enum ParseMode {
	HTML = 'html',
	MARKDOWN = 'markdown',
}

const BASE_URL = 'https://api.telegram.org/bot';

const INVALID_TOKEN: string = 'Invalid token';

const post = async <T, D>(url: string, requestBody?: D): Promise<T> => {
	try {
		const encodedUrl = encodeURI(url);
		const response = await fetch(encodedUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(requestBody),
		});
		const data: T = await response.json();
		return data;
	} catch (error) {
		const message: string = (error as Error).message;
		throw new Error(message);
	}
};

const sendMessage = async (
	token: string,
	{
		chatId = 0,
		message = '',
		parseMode = ParseMode.MARKDOWN,
	}: { chatId: number; message: string; parseMode?: ParseMode },
): Promise<void> => {
	if (!token) throw new Error(INVALID_TOKEN);
	if (!chatId) throw new Error('Invalid chatId');
	if (!message) throw new Error('Invalid message');
	const urlSearchParams = new URLSearchParams();
	urlSearchParams.set('chat_id', chatId.toString());
	urlSearchParams.set('text', message);
	urlSearchParams.set('parse_mode', parseMode);
	const sendMessageUrl = `${BASE_URL}${token}/sendMessage?${urlSearchParams.toString()}`;
	await post(sendMessageUrl);
};

export const Telegram = () => {
	return { messages: { send: sendMessage } };
};
