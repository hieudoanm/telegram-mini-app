import { tryCatch } from '@telegram/utils/try-catch';

export enum ParseMode {
	HTML = 'html',
	MARKDOWN = 'markdown',
}

const BASE_URL = 'https://api.telegram.org/bot';

const INVALID_TOKEN: string = 'Invalid token';

const post = async <T, D>(url: string, requestBody?: D): Promise<T> => {
	const encodedUrl = encodeURI(url);
	const headers = { 'Content-Type': 'application/json' };
	const method = 'POST';
	const body = JSON.stringify(requestBody);
	const { data: response, error: fetchError } = await tryCatch(fetch(encodedUrl, { method, headers, body }));
	if (fetchError) throw new Error(fetchError.message);
	const { data, error } = await tryCatch(response.json());
	if (error) throw new Error(error.message);
	return data as T;
};

const splitMessage = (text: string, limit = 4096) => {
	const chunks = [];
	for (let i = 0; i < text.length; i += limit) {
		chunks.push(text.slice(i, i + limit));
	}
	return chunks;
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
	if (message.length < 4096) {
		await post(sendMessageUrl, {
			chat_id: chatId,
			text: message,
			parse_mode: parseMode,
			reply_to_message_id: messageId,
		});
	} else {
		const parts: string[] = splitMessage(message);
		for (const part of parts) {
			await post(sendMessageUrl, {
				chat_id: chatId,
				text: part,
				parse_mode: parseMode,
				reply_to_message_id: messageId,
			});
		}
	}
};

export const Telegram = () => {
	return { messages: { send: sendMessage } };
};
