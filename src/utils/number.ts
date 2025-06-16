export const commas = (num: number | bigint) => {
	if (typeof num !== 'number' && typeof num !== 'bigint') return '';
	return num.toLocaleString('en-US');
};
