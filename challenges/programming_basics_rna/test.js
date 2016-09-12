import assert from 'assert';
import * as solution from './solution';

describe('toRna', () => {
    it('should work', () => {
        assert.equal(solution.toRna('ACGTGGTCTTAA'), 'UGCACCAGAAUU');
    });
});
