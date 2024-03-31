export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw TypeError('sqft must be a number');
    }
    if (this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw TypeError('sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    throw new Error(`Class extending Building must override [${this.evacuationWarningMessage}]`);
  }
}
