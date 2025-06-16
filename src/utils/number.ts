export const commas = (num: number | bigint) => {
	if (typeof num !== 'number') return '';
	return num.toLocaleString('en-US');
};
