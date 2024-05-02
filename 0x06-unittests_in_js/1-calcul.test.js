const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe('Calucate number', function() {
    it('should add two numbers correctly', function() {
        assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    });

    it('should return zero if both arguments are zero', function() {
        assert.strictEqual(calculateNumber( 'SUM', 1.2, 2.2), 3);
    });

    it('should return -4 when inputs are -1 and -2.7', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1, -2.7), 2);
    });

    it('should return 1 when inputs are 1.7 and -2.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 1,7), 2);
    });

    it('Rounded values should return 0.5 whep input = (-1.2, -2)', function(){
        assert.strictEqual(calculateNumber('DIVIDE', -1.2, 2), -0.5)
    });

    it('Rounded values should return Error whep input = (-1.2, 0.3)', function(){
        assert.strictEqual(calculateNumber('DIVIDE', -1.2, 0.3), 'Error')
    });

    it('Rounded values should return Error whep input = (-1.2, 0)', function(){
        assert.strictEqual(calculateNumber('DIVIDE', -1.2, 0), 'Error')
    });
});
