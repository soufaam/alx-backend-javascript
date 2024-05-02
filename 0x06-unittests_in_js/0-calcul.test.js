const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe('Calucate number', function() {
    it('should add two numbers correctly', function() {
        assert.strictEqual(calculateNumber(1, 2), 3);
    });

    it('should return zero if both arguments are zero', function() {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should add negative numbers correctly', function() {
        assert.strictEqual(calculateNumber(-1, -2), -3);
    });

    it('Rounded values', function(){
        assert.strictEqual(calculateNumber(1.2, 3.7), 5)
    });

    it('Rounded values', function(){
        assert.strictEqual(calculateNumber(1.5, 3.7), 6)
    });

});
