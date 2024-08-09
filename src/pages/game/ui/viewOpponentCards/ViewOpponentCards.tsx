import clsx from 'clsx';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TGameCard } from '@/entites/gameCards';
import TShirtCard from '@/shared/assets/images/tshirt.png';

import { GameStatuses } from '../../lib';
import {
	getCardOpponent,
	opponentStop,
	TDeskSliceStore,
	TGameStatus,
} from '../../model';

import s from './ViewOpponentCards.module.css';

type Props = {
	leftRenderSlot?: ReactNode;
	rightRenderSlot?: ReactNode;
}

export const ViewOpponentCards = ({ leftRenderSlot, rightRenderSlot }: Props) => {
	const dispatch = useDispatch();

	const opponentCards = useSelector<TDeskSliceStore>((state) => state.desk.opponentCards) as TGameCard[];
	const unusedCards = useSelector<TDeskSliceStore>((state) => state.desk.unusedCards) as TGameCard[];
	const gameStatus = useSelector<TDeskSliceStore>((state) => state.desk.status) as TGameStatus;

	// Pseudo AI
	useEffect(() => {
		let timer: string | number | NodeJS.Timeout | undefined;
		if (gameStatus === GameStatuses.StepOpponent) {
			const currentCardsAmount = opponentCards.reduce((acc, card) => acc + card.value, 0);
			const unusedCardsAmount = unusedCards.reduce((acc, card) => acc + card.value, 0);
			const lackOfPoints = 21 - currentCardsAmount;
			timer = setInterval(() => {
				if (lackOfPoints >= 4 && unusedCardsAmount >= 25) {
					dispatch(getCardOpponent());
				} else {
					dispatch(opponentStop());
					clearInterval(timer);
				}
			}, 1500)

		}
		return () => {
			clearInterval(timer)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [opponentCards, unusedCards, gameStatus])

	return (
		<div className={s.board}>
			{leftRenderSlot}
			<div className={s.cards}>
				{opponentCards.map((card, idx) => {
					return (
						<div className={s.layout} key={card.value}>
							<div
								className={clsx(s.flip, gameStatus === GameStatuses.End && s.opened)}
							>
								<div
									className={s.flip__inner}
									style={{ transitionDelay: `${idx * 250}ms` }}
								>
									<img
										alt="Карта"
										src={card.image}
										className={clsx(s.card, s.card__back)}
									/>
									<img
										alt="Рубашка карты"
										src={TShirtCard}
										className={s.card}
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			{rightRenderSlot}
		</div>
	)
}
