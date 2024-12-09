import { useTheme } from '@/contexts/themeContext';

import { Icon } from '@iconify/react';

import Button from '../button/button';

interface ChangeThemeProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ChangeTheme({ ...props }: ChangeThemeProps) {
	const { toggleTheme } = useTheme();
	const changeTheme = () => {
		toggleTheme();
	};
	return (
		<>
			<Button className='w-max' onClick={changeTheme}>
				<Icon icon='proicons:dark-theme' />
				Alterar tema
			</Button>
		</>
	);
}
