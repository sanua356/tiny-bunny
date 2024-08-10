import clsx from 'clsx';

import { useTranslates } from '@/entites/settings';
import aboutGameImage from '@/shared/assets/images/rules.png';
import { Modal } from '@/shared/ui';

import s from './AboutGameModal.module.css';

type Props = {
	isOpen: boolean;
	onClose: () => void;
}

export const AboutGameModal = ({ isOpen, onClose }: Props) => {
	const { t } = useTranslates();

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className={s.authors}>
				<div className={s.info}>
					<span className={s.subtitle}>{t('rulesSubtitle')}</span>
					<h2 className={s.title}>{t('rulesTitle')}</h2>
					<p className={s.description}>{t('rulesDescription1')}</p>
					<p className={s.description}>{t('rulesDescription2')}</p>
					<p className={s.description}>{t('rulesDescription3')}</p>
				</div>
				<div className={s.images}>
					<img src={aboutGameImage} alt="Об игре" className={clsx(s.image, s.image_template)} />
					<img src={aboutGameImage} alt="Об игре" className={s.image} />
				</div>
			</div>
		</Modal>
	)
}
