import assert from 'assert';
import reverseString from './solution';

describe('reverseString', () => {
    it('should work', () => {
        assert.equal(reverseString('hexlet'), 'telxeh');
        assert.equal(reverseString('abs'), 'sba');
        assert.equal(reverseString('ab'), 'ba');
    });

    it('empty string', () => {
        assert.equal(reverseString(''), '');
    });
});
