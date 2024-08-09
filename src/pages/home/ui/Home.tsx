import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { HatchButton } from "@/entites/hatchButton"
import logo from '@/shared/assets/images/logo.png'

import { AboutGameModal } from "./aboutGameModal"
import { AuthorsModal } from "./authorsModal"

import s from './Home.module.css'


export const HomePage = () => {
	const navigate = useNavigate();

	const [isOpenedModalAuthors, setIsOpenedModalAuthors] = useState<boolean>(false);
	const [isOpenedModalAboutGame, setIsOpenedModalAboutGame] = useState<boolean>(false);

	const onClickAuthorsHandler = () => {
		setIsOpenedModalAuthors(true);
	}

	const onCloseAuthorsModalHandler = () => {
		setIsOpenedModalAuthors(false);
	}

	const onClickAboutGameHandler = () => {
		setIsOpenedModalAboutGame(true);
	}

	const onCloseAboutGameModalHandler = () => {
		setIsOpenedModalAboutGame(false);
	}

	const onClickStartGameHandler = () => {
		navigate('/game');
	}

	return (
		<>
			<div className={s.layout}>
				<div className={s.container}>
					<div className={s.content}>
						<img src={logo} alt="Логотип" className={s.logo} />
						<ul className={s.menu}>
							<li className={s.menu__item}>
								<HatchButton onClick={onClickStartGameHandler}>Начать игру</HatchButton>
							</li>
							<li className={s.menu__item}>
								<HatchButton onClick={onClickAuthorsHandler}>Об авторах</HatchButton>
							</li>
							<li className={s.menu__item}>
								<HatchButton onClick={onClickAboutGameHandler}>Об игре</HatchButton>
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
		</>
	)
}
