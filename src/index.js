module.exports = function check(str, bracketsConfig) {
    let bracketPairs = {}
    let stack = []

    bracketsConfig.forEach(pair => {
        let [open, close] = pair
        bracketPairs[open] = close
    });

    let open_brackets = Object.keys(bracketPairs)

    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i]

        if (open_brackets.includes(currentSymbol)) {
            if (bracketPairs[currentSymbol] === currentSymbol) {
                if (stack[stack.length - 1] === currentSymbol) {
                    stack.pop()
                } else {
                    stack.push(currentSymbol)
                }
            } else {
                stack.push(currentSymbol)
            }
        } else {
            if (stack.length === 0) {
                return false
            }

            let topElement = stack[stack.length - 1]

            if (bracketPairs[topElement] === currentSymbol) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0;
}
