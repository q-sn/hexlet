import * as strings from './strings';

const isPalindrome = (value) => {
    if(value.length < 2) {
        return true;
    } else if(value[0] === value[value.length - 1]) {
        return isPalindrome(strings.substr(value, 1, value.length - 2));
    } else {
        return false;
    }
};
export default isPalindrome;
