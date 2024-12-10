import { useChatContext } from '@/contexts/chatContext';
import { twMerge } from 'tailwind-merge';
import CircularProgress from '../circularProgress/circularProgress';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { ScrollArea } from '../ui/scroll-area';

interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
	containerClassName?: string;
}

export default function Chat({ containerClassName, ...props }: ChatProps) {
	const { history, isLoading } = useChatContext();

	const dialog = history.map((item, index) => ({ ...item, id: index }));

	return (
		<>
			<ScrollArea className={props.className}>
				<div {...props} className={twMerge('flex flex-col gap-2 px-20', containerClassName)}>
					{dialog.map((item, index) => {
						if (item.role === 'assistant') {
							return <Response key={index} content={item.content} />;
						} else {
							return <User key={index} content={item.content} />;
						}
					})}

					{isLoading && <Response key={'loading'} content={<CircularProgress size={16} />} />}
				</div>
			</ScrollArea>
		</>
	);
}

const User = ({ content }: { content: string }) => {
	return <div className='flex justify-end p-4'>{content}</div>;
};

const Response = ({ content }: { content: string | React.ReactNode }) => {
	return (
		<div className='bg-foreground flex gap-2 p-4'>
			<Avatar className={twMerge('ease-bounce transition-transform duration-300')}>
				{/* <AvatarImage src='https://github.com/shadcn.png' /> */}
				<AvatarFallback>A</AvatarFallback>
			</Avatar>
			<div>{content}</div>
		</div>
	);
};
