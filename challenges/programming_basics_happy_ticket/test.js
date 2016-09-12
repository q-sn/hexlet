import assert from 'assert';
import isHappyTicket from './solution';

describe('isHappyTicket', () => {
    it('is happy ticket', () => {
        assert.equal(true, isHappyTicket(123321));
        assert.equal(true, isHappyTicket(341800));
        assert.equal(true, isHappyTicket(812146));
    });
    it('is not happy ticket', () => {
        assert.equal(false, isHappyTicket(123567));
        assert.equal(false, isHappyTicket(213612));
    });
});
