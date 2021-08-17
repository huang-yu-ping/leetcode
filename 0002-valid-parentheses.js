var isValid = function(s) {
    const list = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const stack = [];
    const long = s.length;
    for(let i = 0; i < long; i++) {
        const char = s[i];
        if(char === '(' || char === '{' || char == '[') {
            stack.push(list[char])
        } else {
            if(stack.pop() !== char) {
                return false
            }
        }
    }
    return !stack.length;
}