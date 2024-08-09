import clsx from 'clsx';

import authorsImage from '@/shared/assets/images/authors.png';
import { Modal } from '@/shared/ui';

import s from './AuthorsModal.module.css';

type Props = {
	isOpen: boolean;
	onClose: () => void;
}

export const AuthorsModal = ({ isOpen, onClose }: Props) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className={s.authors}>
				<div className={s.info}>
					<span className={s.subtitle}>ИНФОРМАЦИЯ О АВТОРАХ</span>
					<h2 className={s.title}>Авторы</h2>
					<h4 className={s.nooffical}>ЭТО НЕОФИЦИАЛЬНЫЙ ПРОЕКТ! АВТОРЫ ВИЗУАЛЬНОЙ НОВЕЛЛЫ НЕ
						ИМЕЮТ К ДАННОМУ ПРОЕКТУ НИКАКОГО ОТНОШЕНИЯ!
					</h4>
					<p className={s.description}>Вся аудиовизуальная интеллектуальная собственность
						принадлежит автору визуальной новеллы: <strong>"ИП Старцев Антон Юрьевич"</strong>
					</p>
					<ul className={s.links}>
						<li>Ссылка на автора визуальной новеллы: <a href="https://vk.com/bunnyhorror">https://vk.com/bunnyhorror</a></li>
						<li>Ссылка на разаботчика этого проекта: <a href="https://vk.com/alexanderpankratov03">https://vk.com/alexanderpankratov03</a></li>
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
