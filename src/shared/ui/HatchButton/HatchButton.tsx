import clsx from 'clsx';
import { ReactNode } from 'react';

import s from './HatchButton.module.css';

type Props = {
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void;
	children?: string | ReactNode;
	className?: string;
	disabled?: boolean;
	hoverSound?: string;
	clickSound?: string;
}

export const HatchButton = ({
	children,
	onClick,
	className,
	disabled,
	hoverSound,
	clickSound,
	type = 'button'
}: Props) => {
	const onClickHandler = () => {
		if (clickSound) {
			const sound = new Audio(clickSound);
			sound.play();
		}
		onClick?.();
	}

	const onMouseEnterHandler = () => {
		if (hoverSound) {
			const sound = new Audio(hoverSound);
			sound.play();
		}
	}

	return (
		<button
			type={type}
			onClick={onClickHandler}
			onMouseEnter={onMouseEnterHandler}
			disabled={disabled}
			className={clsx(s.button, className)}
		>
			{children}
		</button>
	)
}
