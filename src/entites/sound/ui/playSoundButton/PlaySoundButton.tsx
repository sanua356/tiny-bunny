import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { setActivateSound, TSoundSliceStore } from '@/entites/sound';
import mutedImage from '@/shared/assets/images/muted.png';
import soundImage from '@/shared/assets/images/sound.png';

import s from './PlaySoundButton.module.css';

type Props = {
	className?: string;
}

export const PlaySoundButton = ({ className }: Props) => {
	const dispatch = useDispatch();

	const isActivatedSound = useSelector<TSoundSliceStore>((state) => state.sound.isActivated) as boolean;

	const onToggleSoundStatusHandler = () => {
		dispatch(setActivateSound(!isActivatedSound));
	}

	return (
		<button
			className={clsx(s.sound, className)}
			onClick={onToggleSoundStatusHandler}
		>
			<img src={isActivatedSound ? soundImage : mutedImage} alt="Звук" />
		</button>
	)
}
