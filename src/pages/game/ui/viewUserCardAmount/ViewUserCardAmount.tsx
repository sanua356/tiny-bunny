import { useSelector } from 'react-redux';

import { TGameCard } from '@/entites/gameCards';
import { useTranslates } from '@/entites/settings';

import { TDeskSliceStore } from '../../model';

import s from './ViewUserCardAmount.module.css';

export const ViewUserCardAmount = () => {
	const { t } = useTranslates();

	const playerCards = useSelector<TDeskSliceStore>((state) => state.desk.playerCards) as TGameCard[];

	const cardAmount = playerCards.reduce((acc, card) => acc + card.value, 0);

	return (
		<div className={s.amount}>
			{t('sum')}: {cardAmount}
		</div>
	)
}
