import { useSelector } from 'react-redux';

import { TGameCard } from 'entities/gameCards';
import { useTranslates } from 'entities/settings';

import { TDeskSliceStore } from '../../model';
import s from './ViewOpponentCardAmount.module.css';

export const ViewOpponentCardAmount = () => {
	const { t } = useTranslates();

	const opponentCards = useSelector<TDeskSliceStore>((state) => state.desk.opponentCards) as TGameCard[];

	const cardAmount = opponentCards.reduce((acc, card) => acc + card.value, 0);

	return (
		<div className={s.amount}>
			{t('sum')}: {cardAmount}
		</div>
	)
}
