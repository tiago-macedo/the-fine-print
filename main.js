var super_dict = {
	'0': '2070',	'1': '\u00B9',	'2': '\u00B2',
	'3': '\u00B3',	'4': '\u2074',	'5': '\u2075',
	'6': '\u2076',	'7': '\u2077',	'8': '\u2078',
	'9': '\u2079',	'+': '\u207a',	'-': '\u207b',
	'=': '\u207c',	'(': '\u207d',	')': '\u207e',
	'a': '\u1d43',	'b': '\u1d47',	'c': '\u1d9c', 
	'd': '\u1d48',	'e': '\u1d49',	'f': '\u1da0',
	'g': '\u1d4d',	'h': '\u02b0',	'i': '\u2071',
	'j': '\u02b2',	'k': '\u1d4f',	'l': '\u02e1',
	'm': '\u1d50',	'n': '\u207f',	'o': '\u1d52',
	'p': '\u1d56',	'q': 'q',		'r': '\u02b3',
	's': '\u02e2',	't': '\u1d57',	'u': '\u1d58',
	'v': '\u1d5b',	'w': '\u02b7',	'x': '\u02e3',
	'y': '\u02b8',	'z': '\u1dbb',
	'A': '\u1d2c',	'B': '\u1d2e',	'C': 'C',
	'D': '\u1d30',	'E': '\u1d31',	'F': 'F',
	'G': '\u1d33',	'H': '\u1d34',	'I': '\u1d35',
	'J': '\u1d36',	'K': '\u1d37',	'L': '\u1d38',
	'M': '\u1d39',	'N': '\u1d3a',	'O': '\u1d3c',
	'P': '\u1d3e',	'Q': 'Q',		'R': '\u1d3f',
	'S': 'S',		'T': '\u1d40',	'U': '\u1d41',
	'V': '\u2c7d',	'W': '\u1d42',	'X': 'X',
	'Y': 'Y',		'Z': 'Z',
}

var sub_dict = {
	'0': '\u2080',	'1': '\u2081',	'2': '\u2082',
	'3': '\u2083',	'4': '\u2084',	'5': '\u2085',
	'6': '\u2086',	'7': '\u2087',	'8': '\u2088',
	'9': '\u2089',	'+': '\u208A',	'-': '\u208B',
	'=': '\u208C',	'(': '\u208D',	')': '\u208E',
	'a': '\u2090',	'b': 'b',		'c': 'c',
	'd': 'd',		'e': '\u2091',	'f': 'f',
	'g': 'g',		'h': '\u2095',	'i': '\u1d62',
	'j': '\u2c7c',	'k': '\u2096',	'l': '\u2097',
	'm': '\u2098',	'n': '\u2099',	'o': '\u2092',
	'p': '\u209a',	'q': 'q',		'r': '\u1d63',
	's': '\u209b',	't': '\u209c',	'u': '\u1d64',
	'v': '\u1d65',	'w': 'w',		'x': '\u2093',
	'y': '\u1d67',	'z': 'z',
	// Appearently, Unicode does not care
	// about uppercase subscript letters.
	//
	// 'A': '\u',	'B': '\u',	'C': '\u',
	// 'D': '\u',	'E': '\u',	'F': '\u',
	// 'G': '\u',	'H': '\u',	'I': '\u',
	// 'J': '\u',	'K': '\u',	'L': '\u',
	// 'M': '\u',	'N': '\u',	'O': '\u',
	// 'P': '\u',	'Q': '\u',	'R': '\u',
	// 'S': '\u',	'T': '\u',	'U': '\u',
	// 'V': '\u',	'W': '\u',	'X': '\u',
	// 'Y': '\u',	'Z': '\u',
}

function make_super(text) {
	text = text.split('')
	for (key in text) {
		text[key] = super_dict[text[key]]
	}
	return text.join('')
}

function make_sub(text) {
	text = text.split('')
	for (key in text) {
		text[key] = sub_dict[text[key]]
	}
	return text.join('')
}

var vm = new Vue({
	el: 'main',
	data: {
		input: null,
		type: 'sub',
	},
	computed: {
		converted: function() {
			if (this.input) {
				if (this.type === 'sub') { return make_sub(this.input) }
				else if (this.type === 'sup') { return make_super(this.input) }
			}
			return null
		}
	}
})
// this.input == null ? null : this.convert(input)