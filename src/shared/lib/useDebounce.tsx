import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useDebounce<T>(value: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(
		() => {
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);
			return () => {
				clearTimeout(handler);
			};
		},
		[delay, value]
	);

	return debouncedValue;
}