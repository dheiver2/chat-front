'use client';

import { cva } from 'class-variance-authority';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextFieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	register?: any;
	placeholder?: string;
	variant?: 'contained' | 'default';
	size?: 'sm' | 'lg';
	type?: string;
	mask?: string;
	id?: string;
	className?: string;
	min?: number;
}

export default function TextField({
	placeholder,
	variant,
	size,
	mask,
	type,
	register,
	id,
	className,
	min,
	...props
}: TextFieldProps) {
	const variants = cva(
		`w-full bg-transparent outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50`,
		{
			variants: {
				variant: {
					default: 'border-b-2 border-slate-200 outline-none focus-visible:border-b-slate-300 ',
					contained:
						'focus-visible:outline-accent bg-textField text-textField-foreground border border-border hover:border-accent rounded-lg',
				},
				size: {
					sm: 'px-1 py-1',
					lg: 'px-3 py-3',
				},
			},
			defaultVariants: {
				variant: 'contained',
				size: 'lg',
			},
		}
	);

	return (
		<input
			className={twMerge(variants({ variant, size }), className)}
			type={type}
			id={id}
			placeholder={placeholder}
			min={min}
			autoComplete='off'
			{...register}
			{...props}
		/>
	);
}
