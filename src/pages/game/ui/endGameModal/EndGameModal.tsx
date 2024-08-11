import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HatchButton } from 'entities/hatchButtons';
import { TSettingsSliceStore, useTranslates } from 'entities/settings';
import endGameSound from 'shared/assets/sounds/end_game.ogg';
import { Modal } from 'shared/ui';

import { END_GAME_STATE, GameWinners } from '../../lib';
import { setGameWinner, startGame, TDeskSliceStore, TWinnerGame } from '../../model';

import s from './EndGameModal.module.css';

export const EndGameModal = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { t } = useTranslates();

	const gameWinner = useSelector<TDeskSliceStore>((state) => state.desk.winner) as TWinnerGame;
	const isActivatedSound = useSelector<TSettingsSliceStore>((state) => state.sound.isActivatedSound) as boolean;

	const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false);

	const winnerData = END_GAME_STATE[gameWinner];
	const randomImage = winnerData.images[Math.floor(Math.random() * winnerData.images.length)]
	const randomSound = winnerData.sounds[Math.floor(Math.random() * winnerData.sounds.length)]

	const onCloseHandler = () => {
		dispatch(setGameWinner(GameWinners.Nobody));
		setIsOpenedModal(false);
	}

	const onRefreshGameHandler = () => {
		dispatch(startGame());
		setIsOpenedModal(false);
	}

	const onHomePageHandler = () => {
		navigate('/');
	}

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (gameWinner !== GameWinners.Nobody) {
			timer = setTimeout(() => {
				setIsOpenedModal(true);
				if (isActivatedSound) {
					const sound = new Audio(randomSound);
					sound.volume = 0.5;
					sound.play();
				}
			}, 2000)
		}
		return () => {
			clearTimeout(timer);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gameWinner, isActivatedSound])

	return (
		<Modal
			isOpen={isOpenedModal}
			onClose={onCloseHandler}
			noFade
		>
			<div className={s.winner}>
				<div className={s.info}>
					<span className={s.subtitle}>{t('gameResults')}</span>
					<h2 className={s.title}>{t(winnerData.title)}</h2>
					<span className={s.description}>{t(winnerData.description)}</span>
					<div className={s.buttons}>
						<HatchButton
							onClick={onRefreshGameHandler}
							hoverSound={isActivatedSound ? endGameSound : undefined}
						>
							{t('repeatGameButton')}
						</HatchButton>
						<HatchButton
							onClick={onHomePageHandler}
							hoverSound={isActivatedSound ? endGameSound : undefined}
						>
							{t('goHomeButton')}
						</HatchButton>
					</div>
				</div>
				<div className={s.images}>
					<img src={randomImage} alt="Победа" className={clsx(s.image, s.image_template)} />
					<img src={randomImage} alt="Победа" className={s.image} />
				</div>
			</div>
		</Modal>
	)
}
