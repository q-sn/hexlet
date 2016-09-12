import * as strings from './strings';

export default (ticket) => {
    let right = 0;
    let left = 0;

    while(ticket) {
        if(ticket > 1000) {
            right += ticket % 10;
        } else {
            left += ticket % 10;
        }

        ticket = ticket / 10 >> 0;
    }

    return left === right;
};
