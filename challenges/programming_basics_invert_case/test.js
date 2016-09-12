import assert from 'assert';
import * as solution from './solution';

describe('InvertCase', () => {
    it('should work', () => {
        assert.equal(solution.invertCase('Hello, World!'), 'hELLO, wORLD!');
        assert.equal(solution.invertCase('I loVe JS'), 'i LOvE js');
    });
});
