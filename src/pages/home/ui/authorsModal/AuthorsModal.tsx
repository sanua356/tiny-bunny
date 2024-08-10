import clsx from 'clsx';

import { useTranslates } from '@/entites/settings';
import authorsImage from '@/shared/assets/images/authors.png';
import { Modal } from '@/shared/ui';

import s from './AuthorsModal.module.css';

type Props = {
	isOpen: boolean;
	onClose: () => void;
}

export const AuthorsModal = ({ isOpen, onClose }: Props) => {
	const { t } = useTranslates();

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className={s.authors}>
				<div className={s.info}>
					<span className={s.subtitle}>{t('authorsSubtitle')}</span>
					<h2 className={s.title}>{t('authorsTitle')}</h2>
					<h4 className={s.nooffical}>{t('authorsNoofficial')}</h4>
					<p className={s.description}>{t('authorsDescription')} <strong>{t('authorsSubdescription')}</strong>
					</p>
					<ul className={s.links}>
						<li>{t('authorNovelButtonLink')} <a href="https://vk.com/bunnyhorror">https://vk.com/bunnyhorror</a></li>
						<li>{t('authorProjectButtonLink')} <a href="https://vk.com/alexanderpankratov03">https://vk.com/alexanderpankratov03</a></li>
					</ul>
				</div>
				<div className={s.images}>
					<img src={authorsImage} alt="О авторах" className={clsx(s.image, s.image_template)} />
					<img src={authorsImage} alt="О авторах" className={s.image} />
				</div>
			</div>
		</Modal>
	)
}
