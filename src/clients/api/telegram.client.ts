export enum ParseMode {
	HTML = 'html',
	MARKDOWN = 'markdown',
}

const BASE_URL = 'https://api.telegram.org/bot';

const INVALID_TOKEN: string = 'Invalid token';

const post = async <T, D>(url: string, requestBody?: D): Promise<T> => {
	try {
		const encodedUrl = encodeURI(url);
		const headers = { 'Content-Type': 'application/json' };
		const method = 'POST';
		const body = JSON.stringify(requestBody);
		const response = await fetch(encodedUrl, { method, headers, body });
		const data: T = await response.json();
		return data;
	} catch (error) {
		const message: string = (error as Error).message;
		throw new Error(message);
	}
};

const sendMessage = async ({
	token = '',
	chatId = 0,
	message = '',
	messageId = 0,
	parseMode = ParseMode.MARKDOWN,
}: {
	token: string;
	chatId: number;
	message: string;
	messageId?: number;
	parseMode?: ParseMode;
}): Promise<void> => {
	if (!token) throw new Error(INVALID_TOKEN);
	if (!chatId) throw new Error('Invalid chatId');
	if (!message) throw new Error('Invalid message');
	const sendMessageUrl = `${BASE_URL}${token}/sendMessage`;
	await post(sendMessageUrl, { chat_id: chatId, text: message, parse_mode: parseMode, reply_to_message_id: messageId });
};

export const Telegram = () => {
	return { messages: { send: sendMessage } };
};
