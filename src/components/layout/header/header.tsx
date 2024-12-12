import { twMerge } from 'tailwind-merge';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Header({ children, ...props }: HeaderProps) {
	return (
		<>
			<div className={twMerge('border-border flex w-full items-center gap-2 border-b pb-4', props.className)}>
				{children}
			</div>
		</>
	);
}
