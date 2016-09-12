import assert from 'assert';
import * as solution from './solution';

describe('reverseInt', () => {
    it('should work', () => {
        assert.equal(solution.reverseInt(12), 21);
        assert.equal(solution.reverseInt(-122), -221);
    });
});
