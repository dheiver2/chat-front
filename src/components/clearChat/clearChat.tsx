import { useChatContext } from '@/contexts/chatContext';
import { Eraser } from 'lucide-react';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

interface ClearChatProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ClearChat({ ...props }: ClearChatProps) {
	const { setHistory } = useChatContext();

	const clearHistory = () => {
		toast.success('Histórico limpo');
		setHistory([]);
	};

	return (
		<>
			<div className={twMerge('flex w-max gap-2', props.className)} onClick={clearHistory}>
				Limpar chat
				<Eraser size={16} />
			</div>
		</>
	);
}
