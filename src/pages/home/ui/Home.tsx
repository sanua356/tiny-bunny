import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { HatchButton } from "entities/hatchButtons"
import { PlaySoundButton, TSettingsSliceStore, useTranslates } from "entities/settings"
import logo from 'shared/assets/images/logo.png'
import logoEn from 'shared/assets/images/logo_en.png'
import authorsSound from 'shared/assets/sounds/authors.ogg'
import hoverSound from 'shared/assets/sounds/hover.ogg'
import ambientSound from 'shared/assets/sounds/menu.ogg'
import rulesSound from 'shared/assets/sounds/rules.ogg'

import { AboutGameModal } from "./aboutGameModal"
import { AuthorsModal } from "./authorsModal"

import s from './Home.module.css'
import { ChangeLanguageButton } from "./changeLanguageButton"


export const HomePage = () => {
	const navigate = useNavigate();

	const { currentLanguage, t } = useTranslates();

	const [isOpenedModalAuthors, setIsOpenedModalAuthors] = useState<boolean>(false);
	const [isOpenedModalAboutGame, setIsOpenedModalAboutGame] = useState<boolean>(false);

	const isActivatedSound = useSelector<TSettingsSliceStore>((state) => state.sound.isActivatedSound) as boolean;

	const onClickAuthorsHandler = () => {
		if (isActivatedSound) {
			document.body.classList.add('noevents');
			setTimeout(() => {
				setIsOpenedModalAuthors(true);
				document.body.classList.remove('noevents');
			}, 1300)
		} else {
			setIsOpenedModalAuthors(true);
		}
	}

	const onCloseAuthorsModalHandler = () => {
		setIsOpenedModalAuthors(false);
	}

	const onClickAboutGameHandler = () => {
		if (isActivatedSound) {
			document.body.classList.add('noevents');
			setTimeout(() => {
				setIsOpenedModalAboutGame(true);
				document.body.classList.remove('noevents');
			}, 1300)
		} else {
			setIsOpenedModalAboutGame(true);
		}
	}

	const onCloseAboutGameModalHandler = () => {
		setIsOpenedModalAboutGame(false);
	}

	const onClickStartGameHandler = () => {
		navigate('/game');
	}

	useEffect(() => {
		if (isActivatedSound) {
			const audio = document.getElementById("ambient");
			if (audio) {
				(audio as HTMLAudioElement).volume = 0.04;
			}
		}
	})

	return (
		<>
			<div className={s.layout}>
				<div className={s.container}>
					<div className={s.content}>
						<img src={currentLanguage === 'ru-RU' ? logo : logoEn} alt="Логотип" className={s.logo} />
						<ul className={s.menu}>
							<li className={s.menu__item}>
								<HatchButton
									onClick={onClickStartGameHandler}
									hoverSound={isActivatedSound ? hoverSound : undefined}
								>{t('startGame')}</HatchButton>
							</li>
							<li className={s.menu__item}>
								<HatchButton
									onClick={onClickAuthorsHandler}
									hoverSound={isActivatedSound ? hoverSound : undefined}
									clickSound={isActivatedSound ? authorsSound : undefined}
								>{t('authors')}</HatchButton>
							</li>
							<li className={s.menu__item}>
								<HatchButton
									onClick={onClickAboutGameHandler}
									hoverSound={isActivatedSound ? hoverSound : undefined}
									clickSound={isActivatedSound ? rulesSound : undefined}
								>{t('rules')}</HatchButton>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<AuthorsModal
				isOpen={isOpenedModalAuthors}
				onClose={onCloseAuthorsModalHandler}
			/>
			<AboutGameModal
				isOpen={isOpenedModalAboutGame}
				onClose={onCloseAboutGameModalHandler}
			/>
			<PlaySoundButton />
			<ChangeLanguageButton />
			{isActivatedSound ? (
				<audio autoPlay loop id="ambient">
					<source src={ambientSound} type="audio/ogg"></source>
				</audio>
			) : undefined}
		</>
	)
}
