const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe('Calucate number', function() {
    it('should add two numbers correctly', function() {
        assert.strictEqual(calculateNumber(1, 2), 3);
    });

    it('should return zero if both arguments are zero', function() {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should return -4 when inputs are -1 and -2.7', () => {
        assert.strictEqual(calculateNumber(-1, -2.7), -4);
    });

    it('Rounded values should return 5 whep input = (-1.2, -2)', function(){
        assert.strictEqual(calculateNumber(-1.2, -3), -4)
    });
});
