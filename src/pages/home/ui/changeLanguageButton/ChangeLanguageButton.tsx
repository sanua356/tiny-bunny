import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { changeCurrentLangugage, TAvailableLanguages, TSettingsSliceStore } from 'entities/settings';

import s from './ChangeLanguageButton.module.css';

type Props = {
	className?: string;
}

export const ChangeLanguageButton = ({ className }: Props) => {
	const dispatch = useDispatch();

	const currentLanguage = useSelector<TSettingsSliceStore>((state) => state.sound.currentLanguage) as TAvailableLanguages;

	const onToggleLanguageHandler = () => {
		dispatch(changeCurrentLangugage(currentLanguage === 'ru-RU' ? 'en-US' : 'ru-RU'));
	}

	return (
		<button
			className={clsx(s.language, className)}
			onClick={onToggleLanguageHandler}
		>
			{currentLanguage === 'ru-RU' ? 'RU' : 'EN'}
		</button>
	)
}
