import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { TGameCard } from '@/entites/gameCards';

import { TDeskSliceStore } from '../../model';
import s from './ViewUserCards.module.css';

type Props = {
	leftRenderSlot?: ReactNode;
	rightRenderSlot?: ReactNode;
}

export const ViewUserCards = ({ rightRenderSlot, leftRenderSlot }: Props) => {
	const playerCards = useSelector<TDeskSliceStore>((state) => state.desk.playerCards) as TGameCard[];

	return (
		<div className={s.board}>
			{leftRenderSlot}
			<div className={s.cards}>
				{playerCards.map((card) => {
					return (
						<img
							alt="Карта"
							src={card.image}
							key={card.value}
							className={s.card}
						/>
					);
				})}
			</div>
			{rightRenderSlot}
		</div>
	)
}
