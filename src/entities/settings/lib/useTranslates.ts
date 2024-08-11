import { useSelector } from "react-redux";
import { TAvailableLanguages, TSettingsSliceStore } from "../model";
import { TRANSLATES } from "./translates";

type TResponse = {
	currentLanguage: TAvailableLanguages;
	t: (key: string) => string;
}

export const useTranslates = (): TResponse => {
	const currentLanguage = useSelector<TSettingsSliceStore>((state) => state.sound.currentLanguage) as TAvailableLanguages;

	const t = (key: string): string => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const keyset = (TRANSLATES as any)[key];
		if (keyset[currentLanguage]) {
			return keyset[currentLanguage];
		} else {
			return keyset['ru-RU'];
		}
	};

	return {
		currentLanguage,
		t
	}
}