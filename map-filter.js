let word = 'reced'
const duplicateEncode = (word) => {
    const symbols = word.toLowerCase().split('')

    return symbols.map((el) => {
        const filterSymbols = symbols.filter((els) => els === el).length > 1

        if (filterSymbols)
            return ')'
        else
            return '('

    }).join('')
}
console.log(duplicateEncode(word))