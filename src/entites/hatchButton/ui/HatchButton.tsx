import clsx from 'clsx';
import { ReactNode } from 'react';

import s from './HatchButton.module.css';

type Props = {
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void;
	children?: string | ReactNode;
	className?: string;
	disabled?: boolean;
}

export const HatchButton = ({ children, onClick, className, disabled, type = 'button' }: Props) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={clsx(s.button, className)}
		>
			{children}
		</button>
	)
}
