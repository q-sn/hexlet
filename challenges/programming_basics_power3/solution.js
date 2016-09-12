export const isPowerOfThree = (num) => {
    let value = 1;

    while (value <= num) {
        if (value === num) {
            return true;
        }

        value *= 3;
    }

    return false;
};
