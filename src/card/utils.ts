
export function cardCodeToReadeable(code: string, sep="") {
    let readable = "";
    for(let i = 0; i< code.length; i++) {
        let plusOne = i+1;
        let isBreakpoint = (plusOne % 4) === 0;
        readable += code[i];
        if(i > 0 && isBreakpoint && i < code.length -1) {
            readable +=sep;
        }
    }
    return readable;
}
