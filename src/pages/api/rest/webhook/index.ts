import { generateContent } from '@telegram/clients/api/gemini.client';
import { ParseMode, Telegram } from '@telegram/clients/api/telegram.client';
import { tryCatch } from '@telegram/utils/try-catch';
import { NextApiRequest, NextApiResponse } from 'next';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;

// --- Define minimal Telegram types ---
interface TelegramUser {
	id: number;
	is_bot: boolean;
	first_name: string;
	last_name?: string;
	username?: string;
}

interface TelegramChat {
	id: number;
	type: string;
	title?: string;
	username?: string;
	first_name?: string;
	last_name?: string;
}

interface TelegramMessage {
	message_id: number;
	from: TelegramUser;
	chat: TelegramChat;
	date: number;
	text?: string;
}

interface TelegramUpdate {
	update_id: number;
	message?: TelegramMessage;
	// you can add more fields if you handle other update types
}

const handler = async (request: NextApiRequest, response: NextApiResponse<{ error: string | null }>) => {
	const { method } = request;

	if (method === 'OPTIONS') {
		return response.status(200).end();
	}
	if (method !== 'POST') {
		return response.status(405).json({ error: 'Method Not Allowed' });
	}

	const update: TelegramUpdate = request.body;
	const chatId: number = update.message?.chat.id ?? 0;
	console.info('chatId', chatId);
	const text = update.message?.text ?? '';
	console.info('text', text);
	const { data, error } = await tryCatch(generateContent({ prompt: text }));
	if (error) {
		console.error('error', error);
		return response.status(500).json({ error: 'Internal Server Error' });
	}
	const message: string = data.candidates.at(0)?.content.parts.at(0)?.text ?? 'No Response';
	console.info('message', message);
	await Telegram().messages.send(TELEGRAM_BOT_TOKEN, { chatId, message, parseMode: ParseMode.MARKDOWN });
	return response.status(200).end();
};

export default handler;
