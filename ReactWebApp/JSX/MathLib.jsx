import * as Logger from "./LogLib.jsx";
export function Sum(operand) {
    if (operand.length < 2) {
        const err = new Error("At least 2 operand must be supplied.");
        Logger.log(err);
        throw err;
    }
    let result = 0;
    for (let i = 0; i < operand.length; i++) {
        result += operand[i];
    }
    return result;
}
export function Average(operand) {
    if (operand.length < 2) {
        const err = new Error("At least 2 operand must be supplied.");
        Logger.log(err);
        throw err;
    }
    let result = 0;
    for (let i = 0; i < operand.length; i++) {
        result += operand[i];
    }
    return (result / operand.length);
}
