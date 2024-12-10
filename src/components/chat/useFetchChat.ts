import { useChatContext } from '@/contexts/chatContext';
import { api } from '@/lib/axios';

const useChat = () => {
	const { setLoading, history } = useChatContext();

	const respond = async (prompt: string) => {
		const system = 'Você é um assistente técnico.';

		setLoading(true);
		const response = await api.post('/chat/respond', {
			message: prompt,
			chat_history: history,
			system_message: system,
		});
		setLoading(false);

		return response.data?.response;
	};

	const getHistory = async () => {
		const response = await api.get('/chat/history');
		return response.data?.history;
	};

	return {
		conversation: {
			respond,
		},
		getHistory,
	};
};

export default useChat;

// export type UseChat = ReturnType<typeof useChat>;
