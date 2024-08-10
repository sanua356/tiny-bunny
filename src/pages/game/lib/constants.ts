import draw1 from '@/shared/assets/images/draw1.png';
import lose1 from '@/shared/assets/images/lose1.png';
import lose2 from '@/shared/assets/images/lose2.png';
import lose3 from '@/shared/assets/images/lose3.png';
import lose4 from '@/shared/assets/images/lose4.png';
import win1 from '@/shared/assets/images/win.png';
import win2 from '@/shared/assets/images/win2.png';
import win3 from '@/shared/assets/images/win3.png';
import win4 from '@/shared/assets/images/win4.png';
import draw1sound from '@/shared/assets/sounds/endVoices/draw1.ogg';
import draw2sound from '@/shared/assets/sounds/endVoices/draw2.ogg';
import draw3sound from '@/shared/assets/sounds/endVoices/draw3.ogg';
import lose1sound from '@/shared/assets/sounds/endVoices/lose1.ogg';
import lose2sound from '@/shared/assets/sounds/endVoices/lose2.ogg';
import lose3sound from '@/shared/assets/sounds/endVoices/lose3.ogg';
import lose4sound from '@/shared/assets/sounds/endVoices/lose4.ogg';
import lose5sound from '@/shared/assets/sounds/endVoices/lose5.ogg';
import lose6sound from '@/shared/assets/sounds/endVoices/lose6.ogg';
import win1sound from '@/shared/assets/sounds/endVoices/win1.ogg';
import win2sound from '@/shared/assets/sounds/endVoices/win2.ogg';
import win3sound from '@/shared/assets/sounds/endVoices/win3.ogg';
import win4sound from '@/shared/assets/sounds/endVoices/win4.ogg';
import win5sound from '@/shared/assets/sounds/endVoices/win5.ogg';

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
		title: 'playerWinnerTitle',
		description: 'playerWinnerDescription',
		images: [win1, win2, win3, win4],
		sounds: [win1sound, win2sound, win3sound, win4sound, win5sound],
	},
	[GameWinners.Opponent]: {
		title: 'opponentWinnerTitle',
		description: 'opponentWinnerDescription',
		images: [lose1, lose2, lose3, lose4],
		sounds: [lose1sound, lose2sound, lose3sound, lose4sound, lose5sound, lose6sound],
	},
	[GameWinners.Draw]: {
		title: 'drawWinnerTitle',
		description: 'drawWinnerDescription',
		images: [draw1],
		sounds: [draw1sound, draw2sound, draw3sound],
	},
	[GameWinners.Nobody]: {
		title: 'emptyTranslate',
		description: 'emptyTranslate',
		images: [],
		sounds: [],
	}
}
