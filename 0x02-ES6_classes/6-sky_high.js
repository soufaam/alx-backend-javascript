import Buiding from './5-building';

export default class SkyHighBuilding extends Buiding {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw TypeError('floors must be a number');
    }
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw TypeError('floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
