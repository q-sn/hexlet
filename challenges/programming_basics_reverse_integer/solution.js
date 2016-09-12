import * as strings from './strings';

export const reverseInt = (num) => {
    let result = null;

    while(num) {
        result += num % 10;
        result *= 10;
        num = num / 10 >> 0;
    }

    return result / 10;
};