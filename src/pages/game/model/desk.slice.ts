import { createSlice } from '@reduxjs/toolkit';

import { GAME_CARDS, TGameCard } from '@/entites/gameCards';

import { GameStatuses, GameWinners, shuffleArray } from '../lib';
import { TGameStatus, TWinnerGame } from './types';

export const GAME_STEP_TRANSLATE = {
	[GameStatuses.StepPlayer]: 'Ход игрока',
	[GameStatuses.StepOpponent]: 'Ход оппонента',
	[GameStatuses.End]: 'Показ результатов',
}

export type TDeskSliceState = {
	playerCards: TGameCard[];
	opponentCards: TGameCard[];
	unusedCards: TGameCard[];
	status: TGameStatus;
	winner: TWinnerGame;
}

const initialState: TDeskSliceState = {
	playerCards: [],
	opponentCards: [],
	unusedCards: [],
	status: GameStatuses.StepPlayer,
	winner: GameWinners.Nobody,
}

const deskSlice = createSlice({
	name: 'deskSlice',
	initialState,
	reducers: {
		startGame(state) {
			state.opponentCards = [];
			state.unusedCards = shuffleArray(GAME_CARDS);
			const card1 = state.unusedCards.shift() as TGameCard;
			const card2 = state.unusedCards.shift() as TGameCard;
			state.playerCards = [card1, card2];
			state.winner = GameWinners.Nobody;
			state.status = GameStatuses.StepPlayer;
		},
		nextStep(state) {
			if (state.status === GameStatuses.StepPlayer) {
				state.status = GameStatuses.StepOpponent;
			}
		},
		getCard(state) {
			if (!state.unusedCards.length || state.status !== GameStatuses.StepPlayer) {
				return;
			}
			const card = state.unusedCards.shift();
			state.playerCards.push(card as TGameCard);
		},
		getCardOpponent(state) {
			const card = state.unusedCards.shift();
			state.opponentCards.push(card as TGameCard);
		},
		opponentStop(state) {
			state.status = GameStatuses.StepPlayer;
		},
		setGameWinner(state, action) {
			state.winner = action.payload;
		},
		viewResults(state) {
			state.status = GameStatuses.End;
			const opponentCardsAmount = state.opponentCards.reduce((acc, card) => acc + card.value, 0);
			const playerCardsAmount = state.playerCards.reduce((acc, card) => acc + card.value, 0);
			if ((opponentCardsAmount > 21 && playerCardsAmount > 21) || (opponentCardsAmount === playerCardsAmount)) {
				state.winner = GameWinners.Draw;
			} else if (opponentCardsAmount > 21) {
				state.winner = GameWinners.Player;
			} else if (playerCardsAmount > 21) {
				state.winner = GameWinners.Opponent;
			} else if (playerCardsAmount > opponentCardsAmount) {
				state.winner = GameWinners.Player;
			} else {
				state.winner = GameWinners.Opponent;
			}
		}
	},
})

export const {
	startGame,
	nextStep,
	getCard,
	viewResults,
	getCardOpponent,
	setGameWinner,
	opponentStop,
} = deskSlice.actions;
export default deskSlice.reducer;
