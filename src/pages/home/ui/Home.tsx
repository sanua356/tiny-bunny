import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { HatchButton } from "@/entites/hatchButton"
import { PlaySoundButton, TSoundSliceStore } from "@/entites/sound"
import logo from '@/shared/assets/images/logo.png'
import authorsSound from '@/shared/assets/sounds/authors.ogg'
import hoverSound from '@/shared/assets/sounds/hover.ogg'
import ambientSound from '@/shared/assets/sounds/menu.ogg'
import rulesSound from '@/shared/assets/sounds/rules.ogg'

import { AboutGameModal } from "./aboutGameModal"
import { AuthorsModal } from "./authorsModal"

import s from './Home.module.css'


export const HomePage = () => {
	const navigate = useNavigate();

	const [isOpenedModalAuthors, setIsOpenedModalAuthors] = useState<boolean>(false);
	const [isOpenedModalAboutGame, setIsOpenedModalAboutGame] = useState<boolean>(false);

	const isActivatedSound = useSelector<TSoundSliceStore>((state) => state.sound.isActivated) as boolean;

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
						<img src={logo} alt="Логотип" className={s.logo} />
						<ul className={s.menu}>
							<li className={s.menu__item}>
								<HatchButton
									onClick={onClickStartGameHandler}
									hoverSound={isActivatedSound ? hoverSound : undefined}
								>Начать игру</HatchButton>
							</li>
							<li className={s.menu__item}>
								<HatchButton
									onClick={onClickAuthorsHandler}
									hoverSound={isActivatedSound ? hoverSound : undefined}
									clickSound={isActivatedSound ? authorsSound : undefined}
								>Об авторах</HatchButton>
							</li>
							<li className={s.menu__item}>
								<HatchButton
									onClick={onClickAboutGameHandler}
									hoverSound={isActivatedSound ? hoverSound : undefined}
									clickSound={isActivatedSound ? rulesSound : undefined}
								>Об игре</HatchButton>
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
			{isActivatedSound ? (
				<audio autoPlay loop id="ambient">
					<source src={ambientSound} type="audio/ogg"></source>
				</audio>
			) : undefined}
		</>
	)
}
