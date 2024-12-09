import { Eraser } from 'lucide-react';
import Button from '../button/button';

interface ClearChatProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ClearChat({ ...props }: ClearChatProps) {
	return (
		<>
			<Button className='w-max'>
				<Eraser size={16} />
				Limpar chat
			</Button>
		</>
	);
}
