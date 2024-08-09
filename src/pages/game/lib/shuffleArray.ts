export const shuffleArray = (array: Array<unknown>) => {
	const copyArray = JSON.parse(JSON.stringify(array));
	for (let i = copyArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
	}
	return copyArray;
}