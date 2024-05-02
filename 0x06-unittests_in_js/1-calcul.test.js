const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe('Calucate number', function() {
    it('should add two numbers correctly', function() {
        assert.strictEqual(calculateNumber(1, 2, 'SUM'), 3);
    });

    it('should return zero if both arguments are zero', function() {
        assert.strictEqual(calculateNumber(1.2, 2.2, 'SUM'), 3);
    });

    it('should return -4 when inputs are -1 and -2.7', () => {
        assert.strictEqual(calculateNumber(-1, -2.7, 'SUBTRACT'), 2);
    });

    it('Rounded values should return 5 whep input = (-1.2, -2)', function(){
        assert.strictEqual(calculateNumber(-1.2, 2, 'DIV'), -0.5)
    });

    it('Rounded values should return 5 whep input = (-1.2, -2)', function(){
        assert.strictEqual(calculateNumber(-1.2, 0.3, 'DIV'), 'Error')
    });
});
