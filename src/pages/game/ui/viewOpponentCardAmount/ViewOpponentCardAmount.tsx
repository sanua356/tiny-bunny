import { useSelector } from 'react-redux';

import { TGameCard } from '@/entites/gameCards';

import { TDeskSliceStore } from '../../model';
import s from './ViewOpponentCardAmount.module.css';

export const ViewOpponentCardAmount = () => {
	const opponentCards = useSelector<TDeskSliceStore>((state) => state.desk.opponentCards) as TGameCard[];

	const cardAmount = opponentCards.reduce((acc, card) => acc + card.value, 0);

	return (
		<div className={s.amount}>
			Сумма: {cardAmount}
		</div>
	)
}
