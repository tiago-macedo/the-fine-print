var vm = new Vue({
    el: 'main',
    data: {
        input: null,
        type: 'sub',
        output: null
    }
})

var super_list = {
    '0': '&#2070;',
    '1': '&#00B9;',
    '2': '&#00B2;',
    '3': '&#00B3;',
    '4': '&#2074;',
    '5': '&#2075;',
    '6': '&#2076;',
    '7': '&#2077;',
    '8': '&#2078;',
    '9': '&#2079;',
    'a': '&#1d43;',
    'b': '&#1d47;',
    'c': '&#1d9c;',
    'd': '&#1d48;',
    'e': '&#1d49;',
    'f': '&#1da0;',
    'g': '&#1d4d;',
    'h': '&#02b0;',
    'i': '&#2071;',
    'j': '&#02b2;',
    'k': '&#1d4f;',
    'l': '&#02e1;',
    'm': '&#1d50;',
    'n': '&#207f;',
    'o': '&#1d52;',
    'p': '&#1d56;',
    'q': 'q',
    'r': '&#02b3;',
    's': '&#02e2;',
    't': '&#1d57;',
    'u': '&#1d58;',
    'v': '&#1d5b;',
    'w': '&#02b7;',
    'x': '&#02e3;',
    'y': '&#02b8;',
    'z': '&#1dbb;',
    'A': '&#;',
    'B': '&#;',
    'C': '&#;',
    'D': '&#;',
    'E': '&#;',
    'F': '&#;',
    'G': '&#;',
    'H': '&#;',
    'I': '&#;',
    'J': '&#;',
    'K': '&#;',
    'L': '&#;',
    'M': '&#;',
    'N': '&#;',
    'O': '&#;',
    'P': '&#;',
    'Q': '&#;',
    'R': '&#;',
    'S': '&#;',
    'T': '&#;',
    'U': '&#;',
    'V': '&#;',
    'W': '&#;',
    'X': '&#;',
    'Y': '&#;',
    'Z': '&#;',
}

function make_super(letter, original) {
    return original.replace(new RegExp(letter, 'g'), super_list[letter])
}

console.log(make_super('a', 'banana'))