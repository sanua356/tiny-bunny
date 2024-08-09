import { MouseEvent, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import clsx from "clsx";
import s from './Modal.module.css';

type Props = {
	isOpen: boolean;
	onClose?: () => void;
	children: ReactNode;
	noFade?: boolean;
}

export const Modal = ({ isOpen, onClose, children, noFade }: Props) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (isOpen) {
			setIsOpened(true);
		} else {
			if (!noFade) {
				timer = setTimeout(() => {
					setIsOpened(false);
				}, 800)
			} else {
				setIsOpened(false);
			}
		}
		return () => {
			clearTimeout(timer);
		}
	}, [isOpen, noFade])

	const onClickModal = (event: MouseEvent) => {
		if ((event.target as HTMLElement).classList.contains(s.modal)) {
			onClose?.();
		}
	}

	if (!isOpened) return null;

	return createPortal(
		<div
			className={clsx(s.modal, (!isOpen && isOpened) && s.modal_unmount)}
			onClick={onClickModal}
		>
			{children}
		</div>
		, document.getElementById('modal-root') as HTMLElement
	)
}
