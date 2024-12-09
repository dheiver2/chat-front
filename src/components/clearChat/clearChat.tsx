import { Eraser } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import Button from '../button/button';

interface ClearChatProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ClearChat({ ...props }: ClearChatProps) {
	return (
		<>
			<Button className={twMerge('w-max', props.className)}>
				<Eraser size={16} />
				Limpar chat
			</Button>
		</>
	);
}
