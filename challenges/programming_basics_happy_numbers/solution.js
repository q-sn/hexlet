import * as strings from './strings';

const sumDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < strings.length(numAsStr); i++) {
        const digit = Number(numAsStr[i]);
        sum += digit * digit;
    }

    return sum;
};

export const happyNumber = (num) => {
    let isOne = false;
    let result = num;

    for(let i = 0; i < 10; i++) {
        if((result = sumDigits(result)) === 1) isOne = true;
    }

    return isOne;
};
