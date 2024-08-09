import { useSelector } from 'react-redux';

import { TGameCard } from '@/entites/gameCards';

import { TDeskSliceStore } from '../../model';

import s from './ViewUserCardAmount.module.css';

export const ViewUserCardAmount = () => {
	const playerCards = useSelector<TDeskSliceStore>((state) => state.desk.playerCards) as TGameCard[];

	const cardAmount = playerCards.reduce((acc, card) => acc + card.value, 0);

	return (
		<div className={s.amount}>
			Сумма: {cardAmount}
		</div>
	)
}
