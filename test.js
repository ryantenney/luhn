var luhn = require("./luhn");

console.log([
	luhn.generate(16),
	luhn.generate(16, "481171"),
	luhn.generate(15, "3717")
]);
