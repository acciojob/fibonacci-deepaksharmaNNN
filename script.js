function fibonacci(num) {
// your code here
	if(num === 1) return 0;
	if(num === 2) return 1;
	let a = 0;
	let b = 1;
	let c = 0;
	for (let i = 2; i < num; i++) {
		c = a + b
		a = b
		b = c
	}
	return c;
}

module.exports = fibonacci;
