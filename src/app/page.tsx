'use client';

import logo from '@/assets/brand/logo.svg';

import ChangeTheme from '@/components/changeTheme/changeTheme';
import Chat from '@/components/chat/chat';
import ClearChat from '@/components/clearChat/clearChat';
import Header from '@/components/layout/header/header';
import SubmitPrompt from '@/components/submitPrompt/submitPrompt';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex h-screen flex-col p-4 font-[family-name:var(--font-geist-sans)]'>
			<Header className='flex justify-between'>
				<Link href='https://gabriel-azv.com' target='_blank'>
					<Image src={logo} alt='logo - Gabriel Azevedo' width={50} height={50} />
				</Link>
				<Actions />
			</Header>

			<Chat containerClassName='flex-1' className='flex-1' />

			<SubmitPrompt />
		</div>
	);
}

const Actions = () => {
	return (
		<div className='flex items-center justify-end gap-2'>
			<ChangeTheme />
			<ClearChat />
		</div>
	);
};
