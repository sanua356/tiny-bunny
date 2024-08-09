import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HatchButton } from '@/entites/hatchButton';
import { Modal } from '@/shared/ui/Modal';

import { END_GAME_STATE, GameWinners } from '../../lib';
import { setGameWinner, startGame, TDeskSliceStore, TWinnerGame } from '../../model';

import s from './EndGameModal.module.css';

export const EndGameModal = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const gameWinner = useSelector<TDeskSliceStore>((state) => state.desk.winner) as TWinnerGame;

	const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false);

	const winnerData = END_GAME_STATE[gameWinner];
	const randomImage = winnerData.images[Math.floor(Math.random() * winnerData.images.length)]

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
			}, 2000)
		}
		return () => {
			clearTimeout(timer);
		}
	}, [gameWinner])

	return (
		<Modal
			isOpen={isOpenedModal}
			onClose={onCloseHandler}
			noFade
		>
			<div className={s.winner}>
				<div className={s.info}>
					<span className={s.subtitle}>РЕЗУЛЬТАТЫ ИГРЫ</span>
					<h2 className={s.title}>{winnerData.title}</h2>
					<span className={s.description}>{winnerData.description}</span>
					<div className={s.buttons}>
						<HatchButton onClick={onRefreshGameHandler}>Повторить игру</HatchButton>
						<HatchButton onClick={onHomePageHandler}>На главную</HatchButton>
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
