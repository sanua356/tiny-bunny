import draw1 from '@/shared/assets/images/draw1.png';
import lose1 from '@/shared/assets/images/lose1.png';
import lose2 from '@/shared/assets/images/lose2.png';
import lose3 from '@/shared/assets/images/lose3.png';
import lose4 from '@/shared/assets/images/lose4.png';
import win1 from '@/shared/assets/images/win.png';
import win2 from '@/shared/assets/images/win2.png';
import win3 from '@/shared/assets/images/win3.png';
import win4 from '@/shared/assets/images/win4.png';

export enum GameStatuses {
	StepPlayer,
	StepOpponent,
	End,
}

export enum GameWinners {
	Nobody,
	Player,
	Opponent,
	Draw
}

export const END_GAME_STATE = {
	[GameWinners.Player]: {
		title: 'Победа!',
		description: 'Вы обыграли хозяниа леса! Хотите повторить игру?',
		images: [win1, win2, win3, win4],
	},
	[GameWinners.Opponent]: {
		title: 'Поражение',
		description: 'Хозяин леса обыграл Вас! Хотите повторить игру?',
		images: [lose1, lose2, lose3, lose4],
	},
	[GameWinners.Draw]: {
		title: 'Ничья',
		description: 'В данной партии нет победителя! Хотите повторить игру?',
		images: [draw1],
	},
	[GameWinners.Nobody]: {
		title: '',
		description: '',
		images: [],
	}
}
