var luhn = {
	calculate: function(acctNum) {
		var digits = acctNum.split("").reverse();
		var sum = 0;
		for (var i = 0, l = digits.length; l > i; ++i) {
			var digit = +digits[i];
			if (i % 2 == 0) {
				digit *= 2;
				if (digit > 9) {
					digit -= 9;
				}
			}
			sum += digit;
		}
		return (sum * 9) % 10;
	},
	verify: function(acctNum) {
		var checkDigit = +acctNum.substring(acctNum.length - 1);
		return checkDigit == luhn.calculate(acctNum.substring(0, acctNum.length - 1));
	},
	generate: function(length, prefix) {
		var acctNum = [];
		if (prefix) acctNum = prefix.split("");
		for (var i = acctNum.length, l = length - 1; l > i; ++i) {
			acctNum[i] = ~~(Math.random() * 10);
		}
		acctNum[length - 1] = luhn.calculate(acctNum.join(""));
		acctNum = acctNum.join("");
		if (!luhn.verify(acctNum)) { // sanity check
			throw "Generated number doesn't pass";
		}
		return acctNum;
	}
}

module.exports = luhn;
