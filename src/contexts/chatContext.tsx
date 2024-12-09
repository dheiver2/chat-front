'use client';

import { HistoryItemProps } from '@/interfaces/historyItemProps';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

interface ChatContextProps {
	isLoading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
	history: HistoryItemProps[];
	setHistory: Dispatch<SetStateAction<HistoryItemProps[]>>;
}

const ChatContext = createContext<ChatContextProps>({
	history: [],
	isLoading: false,
	setLoading: () => {},
	setHistory: () => {},
});

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
	const [history, setHistory] = useState<HistoryItemProps[]>([]);
	const [isLoading, setLoading] = useState(false);

	return (
		<ChatContext.Provider value={{ history, setHistory, isLoading, setLoading }}>
			{children}
		</ChatContext.Provider>
	);
};
