import { useTheme } from '@/contexts/themeContext';

import { Icon } from '@iconify/react';

import { twMerge } from 'tailwind-merge';
import Button from '../button/button';

interface ChangeThemeProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ChangeTheme({ ...props }: ChangeThemeProps) {
	const { toggleTheme } = useTheme();
	const changeTheme = () => {
		toggleTheme();
	};
	return (
		<>
			<Button className={twMerge('w-max', props.className)} onClick={changeTheme}>
				<Icon icon='proicons:dark-theme' />
				Alterar tema
			</Button>
		</>
	);
}
