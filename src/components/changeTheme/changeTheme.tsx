import { useTheme } from '@/contexts/themeContext';

import { Icon } from '@iconify/react';

import { twMerge } from 'tailwind-merge';

interface ChangeThemeProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ChangeTheme({ ...props }: ChangeThemeProps) {
	const { toggleTheme } = useTheme();
	const changeTheme = () => {
		toggleTheme();
	};
	return (
		<>
			<div className={twMerge('flex w-max gap-2', props.className)} onClick={changeTheme}>
				Alterar tema
				<Icon icon='proicons:dark-theme' />
			</div>
		</>
	);
}
