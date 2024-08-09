import clsx from 'clsx';
import { useSelector } from 'react-redux';

import { TGameCard } from '@/entites/gameCards';
import TShirtCard from '@/shared/assets/images/tshirt_h.png';
import useDebounce from '@/shared/lib/useDebounce';

import { GAME_STEP_TRANSLATE, TDeskSliceStore, TGameStatus } from '../../model';

import s from './ViewUnusedCards.module.css';

const getTransformStyle = (idx: number) => {
	const baseStyle = `translateY(calc(10 * ${idx}px))`;
	return baseStyle;
}

type Props = {
	className?: string;
}

export const ViewUnusedCards = ({ className }: Props) => {
	const unusedCards = useSelector<TDeskSliceStore>((state) => state.desk.unusedCards) as TGameCard[];
	const gameStatus = useSelector<TDeskSliceStore>((state) => state.desk.status) as TGameStatus;

	const debouncedUnusedCards = useDebounce<TGameCard[]>(unusedCards, 400);
	const isRemovingCard = debouncedUnusedCards.length > unusedCards.length;
	const renderArray = debouncedUnusedCards.length === 0 ? unusedCards : debouncedUnusedCards;

	return (
		<div className={clsx(s.cards, className)}>
			<span
				className={s.status}
			>
				Стадия игры: {GAME_STEP_TRANSLATE[gameStatus]}
			</span>
			<img
				alt="Карта-заглушка"
				src={TShirtCard}
				className={s.template}
			/>
			{renderArray.map((card, idx) => {
				return (
					<img
						alt="Карта колоды"
						src={TShirtCard}
						key={card.value}
						className={
							clsx(
								s.card,
								(isRemovingCard && idx === debouncedUnusedCards.length - 1) && s.card_removing
							)}
						style={{
							transform: getTransformStyle(idx)
						}}
					/>
				)
			})}
			<span
				className={s.cards__count}
				style={{ marginTop: `calc(10px + ${unusedCards.length * 10}px)` }}
			>
				Осталось карт: {unusedCards.length} шт.
			</span>
		</div>
	)
}
