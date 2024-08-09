import clsx from 'clsx';

import aboutGameImage from '@/shared/assets/images/rules.png';
import { Modal } from '@/shared/ui';

import s from './AboutGameModal.module.css';

type Props = {
	isOpen: boolean;
	onClose: () => void;
}

export const AboutGameModal = ({ isOpen, onClose }: Props) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className={s.authors}>
				<div className={s.info}>
					<span className={s.subtitle}>ПРАВИЛА ИГРЫ</span>
					<h2 className={s.title}>ОБ ИГРЕ</h2>
					<p className={s.description}>Это классическая карточная игра "21 очко".
						В колоде имеется 11 карт номиналом от 2 до 11. Игроку необходимо набрать больше очков, чем
						у оппонента, но не более 21.
					</p>
					<p className={s.description}>Если игрок или игрок и оппонент набрали более 21 очка, они автоматически
						считаются проигравшими.
					</p>
					<p className={s.description}>Если и игрок и оппонент набрали более 21 очка, либо они оба
						набрали одинаковое количество очков, игра заканчивается ничьей.
					</p>
				</div>
				<div className={s.images}>
					<img src={aboutGameImage} alt="Об игре" className={clsx(s.image, s.image_template)} />
					<img src={aboutGameImage} alt="Об игре" className={s.image} />
				</div>
			</div>
		</Modal>
	)
}
