import assert from 'assert';
import * as solution from './solution';

describe('happyNumber', () => {
    it('should work', () => {
        assert(solution.happyNumber(1));
        assert(solution.happyNumber(7));
        assert(solution.happyNumber(13));
        assert(!solution.happyNumber(0));
        assert(!solution.happyNumber(2));
        assert(!solution.happyNumber(90));
    });
});
