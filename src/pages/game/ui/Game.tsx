import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IconButton } from '@/entites/IconButton';

import { GameStatuses } from '../lib';
import { startGame, TDeskSliceStore, TGameStatus } from '../model';
import { EndGameModal } from './endGameModal';
import { PlayerActions } from './playerActions';
import { ViewOpponentCardAmount } from './viewOpponentCardAmount';
import { ViewOpponentCards } from './viewOpponentCards';
import { ViewUnusedCards } from './viewUnusedCards';
import { ViewUserCardAmount } from './viewUserCardAmount';
import { ViewUserCards } from './viewUserCards';

import s from './Game.module.css';

export const GamePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const gameStatus = useSelector<TDeskSliceStore>((state) => state.desk.status) as TGameStatus;

	const onGoBackHandler = () => {
		navigate('/');
	}

	const onRefreshHandler = () => {
		dispatch(startGame());
	}

	useEffect(() => {
		dispatch(startGame());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div className={s.layout}>
				<IconButton icon='back' onClick={onGoBackHandler} className={s.goback} />
				<IconButton icon='refresh' onClick={onRefreshHandler} className={s.refresh} />
				<ViewUnusedCards />
				<div className={s.cards}>
					<ViewOpponentCards
						leftRenderSlot={gameStatus === GameStatuses.End ? <ViewOpponentCardAmount /> : undefined}
					/>
					<div className={s.player}>
						<ViewUserCards
							leftRenderSlot={<ViewUserCardAmount />}
							rightRenderSlot={<PlayerActions />}
						/>
					</div>
				</div>
			</div>
			<EndGameModal />
		</>
	)
}
