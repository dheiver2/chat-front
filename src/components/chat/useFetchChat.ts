import { useChatContext } from '@/contexts/chatContext';
import { HistoryItemProps } from '@/interfaces/historyItemProps';
import { api } from '@/lib/axios';

interface ChatResponse {
	response: string;
	history: HistoryItemProps[];
}

const useChat = () => {
	const { setLoading, history } = useChatContext();

	const respond = async (prompt: string) => {
		setLoading(true);
		const response = await api.post('/chat/respond', {
			message: prompt,
			history: history,
		});
		setLoading(false);

		return response?.data as ChatResponse;
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
