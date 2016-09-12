import * as strings from './strings';

const reverseString = (str) => {
    if(str.length !== 0) {
        return str[str.length - 1] + reverseString(strings.substr(str, 0, str.length - 1));
    } else {
        return str;
    }
};

export default reverseString;