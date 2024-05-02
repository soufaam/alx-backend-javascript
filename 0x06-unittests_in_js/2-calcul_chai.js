function calculateNumber(type, a, b){
    if (type === 'SUM'){
      const sum = Math.round(a) + Math.round(b);
      return sum;
    }

    else if (type === 'SUBTRACT'){
        const sub = Math.round(a) - Math.round(b);
        return sub;
    }

    else if (type === 'DIVIDE'){
        if (Math.round(b) === 0) {
            return 'Error'
        }
        const div = Math.round(a) / Math.round(b);
        return div;
    }

}

module.exports = calculateNumber;
