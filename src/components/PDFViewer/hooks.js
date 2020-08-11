export const delay = async (n) => {
	console.time('Promise');
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, n);
	});
	console.timeEnd('Promise');
};
