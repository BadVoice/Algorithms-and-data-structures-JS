let arr = [
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', '']
]

const arrAdder = arr => arr.reduce((acc, m) => acc.map((b, i) => b + m[i])).join(' ')


console.log(arrAdder(arr))