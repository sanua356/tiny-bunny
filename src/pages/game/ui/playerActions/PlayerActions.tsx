import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { TGameCard } from '@/entites/gameCards';
import { HatchButton } from '@/entites/hatchButton';
import { TSettingsSliceStore } from '@/entites/settings';
import getCardSound from '@/shared/assets/sounds/get_card.ogg';
import hoverSound from '@/shared/assets/sounds/hover.ogg';
import nextStepSound from '@/shared/assets/sounds/next_step.ogg';
import viewCardsSound from '@/shared/assets/sounds/view_cards.ogg';

import { GameStatuses } from '../../lib';
import {
	getCard,
	nextStep,
	TDeskSliceStore,
	TGameStatus,
	viewResults,
} from '../../model';

import s from './PlayerActions.module.css';

export const PlayerActions = () => {
	const dispatch = useDispatch();

	const gameStatus = useSelector<TDeskSliceStore>((state) => state.desk.status) as TGameStatus;
	const unusedCards = useSelector<TDeskSliceStore>((state) => state.desk.unusedCards) as TGameCard[];
	const playerCards = useSelector<TDeskSliceStore>((state) => state.desk.playerCards) as TGameCard[];
	const opponentCards = useSelector<TDeskSliceStore>((state) => state.desk.opponentCards) as TGameCard[];
	const isActivatedSound = useSelector<TSettingsSliceStore>((state) => state.sound.isActivatedSound) as boolean;

	const nextStepButtonDisabled = (
		gameStatus !== GameStatuses.StepPlayer ||
		playerCards.length === 0
	)

	const getCardButtonDisabled = (
		gameStatus !== GameStatuses.StepPlayer ||
		unusedCards.length === 0
	);

	const endGameButtonDisabled = (
		gameStatus !== GameStatuses.StepPlayer ||
		playerCards.length === 0 ||
		opponentCards.length === 0
	)

	const onNextStepHandler = () => {
		dispatch(nextStep());
	}

	const onGetCardHandler = () => {
		const playerCardsAmount = playerCards.reduce((acc, card) => acc + card.value, 0);
		if (playerCardsAmount >= 21) {
			toast("У Вас равно или более 21 очка. Больше карт взять нельзя. Передайте ход оппоненту.");
			return;
		}
		dispatch(getCard());
	}

	const onEndGameHandler = () => {
		dispatch(viewResults());
	}


	return (
		<div className={s.actions}>
			<HatchButton
				className={s.button}
				onClick={onNextStepHandler}
				disabled={nextStepButtonDisabled}
				clickSound={isActivatedSound ? nextStepSound : undefined}
				hoverSound={isActivatedSound ? hoverSound : undefined}
			>
				Передать ход
			</HatchButton>
			<HatchButton
				className={s.button}
				onClick={onGetCardHandler}
				disabled={getCardButtonDisabled}
				clickSound={isActivatedSound ? getCardSound : undefined}
				hoverSound={isActivatedSound ? hoverSound : undefined}
			>
				Взять карту
			</HatchButton>
			<HatchButton
				className={s.button}
				onClick={onEndGameHandler}
				disabled={endGameButtonDisabled}
				clickSound={isActivatedSound ? viewCardsSound : undefined}
				hoverSound={isActivatedSound ? hoverSound : undefined}
			>
				Вскрыть карты
			</HatchButton>
		</div>
	)
}
