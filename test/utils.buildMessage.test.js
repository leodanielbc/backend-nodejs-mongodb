const assert = require('assert'); // permite verificar si el test es correcto
const builMessage = require('../utils/buildMessage');

// con only solo se va a ejecutar lo que esta especificado dentro
describe.only('utils - buildMessage', function() {
    describe('when receives an entity and an action ', () => {
        it('should return the respective message', function() {
            const result = builMessage('movie', 'create');
            const expect = "movie created";
            assert.strictEqual(result, expect);
        });
    });

    describe('when receives an entity and an action and is a list', () => {
        it("should return the respective message with the entity in plural", function() {
            const result = builMessage('movie', 'list');
            const expected = 'movies listed';
            assert.strictEqual(result, expected);
        });
    });
    
});