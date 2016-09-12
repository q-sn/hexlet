import * as strings from './strings';

export const invertCase = (str) => {
    let resultString = '';

    for(let i = 0; i < str.length; i++){
        if(strings.toUpperCase(str[i]) === str[i]) {
            resultString += strings.toLowerCase(str[i]);
        } else {
            resultString += strings.toUpperCase(str[i]);
        }
    }

    return resultString;
};
