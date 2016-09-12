import assert from 'assert';
import ackermann from './solution';

describe('ackermann', () => {
    it('should work', () => {
        assert.equal(ackermann(0, 0), 1);
        assert.equal(ackermann(1, 1), 3);
        assert.equal(ackermann(1, 2), 4);
        assert.equal(ackermann(2, 1), 5);
        assert.equal(ackermann(2, 3), 9);
    });
    it('bad value', () => {
        assert.equal(ackermann(-1, 1), undefined);
        assert.equal(ackermann(1, -1), undefined);
    });
});
