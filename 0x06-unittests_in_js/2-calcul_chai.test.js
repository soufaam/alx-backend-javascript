const expect = require('chai').expect;
const calculateNumber = require("./1-calcul");

describe('Calucate number', function() {
    it('should add two numbers correctly', function() {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('should return zero if both arguments are zero', function() {
        expect(calculateNumber( 'SUM', 1.2, 2.2)).to.equal(3);
    });

    it('should return -4 when inputs are -1 and -2.7', () => {
        expect(calculateNumber('SUBTRACT', -1, -2.7)).to.equal(2);
    });

    it('should return 1 when inputs are 1.7 and -2.5', () => {
        expect(calculateNumber('SUBTRACT', 2.5, 1,7)).to.equal(2);
    });

    it('Rounded values should return 0.5 whep input = (-1.2, -2)', function(){
        expect(calculateNumber('DIVIDE', -1.2, 2)).to.equal(-0.5);
    });

    it('Rounded values should return Error whep input = (-1.2, 0.3)', function(){
        expect(calculateNumber('DIVIDE', -1.2, 0.3)).to.equal('Error')
    });

    it('Rounded values should return Error whep input = (-1.2, 0)', function(){
        expect(calculateNumber('DIVIDE', -1.2, 0)).to.equal('Error')
    });
});
