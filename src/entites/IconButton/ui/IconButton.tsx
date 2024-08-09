import clsx from 'clsx';

import backIcon from '@/shared/assets/images/back.png';
import refreshIcon from '@/shared/assets/images/refresh.png';

import s from './IconButton.module.css';

type Props = {
	icon: 'refresh' | 'back';
	onClick?: () => void;
	className?: string;
}

const VARIANTS_ICONS = {
	refresh: refreshIcon,
	back: backIcon,
};

export const IconButton = ({ onClick, className, icon }: Props) => {
	return (
		<button
			type="button"
			className={clsx(s.button, className)}
			onClick={onClick}
		>
			<img src={VARIANTS_ICONS[icon]} alt="Кнопка-иконка" className={s.icon} />
		</button>
	)
}
