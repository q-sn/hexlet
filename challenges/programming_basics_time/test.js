import assert from 'assert';
import solution from './solution';

describe('time', () => {
    it('should work', () => {
        assert.equal(solution(60), '01:00');
        assert.equal(solution(5), '00:05');
        assert.equal(solution(15), '00:15');
        assert.equal(solution(175), '02:55');
        assert.equal(solution(67), '01:07');
        assert.equal(solution(130), '02:10')
    });
});
