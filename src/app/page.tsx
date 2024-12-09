'use client';

import ChangeTheme from '@/components/changeTheme/changeTheme';
import Chat from '@/components/chat/chat';
import ClearChat from '@/components/clearChat/clearChat';
import SubmitPrompt from '@/components/submitPrompt/submitPrompt';
import { ReactNode } from 'react';

export default function Home() {
	return (
		<div className='h-screen p-4 font-[family-name:var(--font-geist-sans)]'>
			<Actions>
				<>
					<ChangeTheme />
					<ClearChat />
				</>
			</Actions>

			<Chat className='flex-1' />

			<SubmitPrompt />
		</div>
	);
}

const Actions = ({ children }: { children: ReactNode }) => {
	return (
		<div className='border-border flex w-full items-center justify-end gap-2 border-b pb-4'>{children}</div>
	);
};
