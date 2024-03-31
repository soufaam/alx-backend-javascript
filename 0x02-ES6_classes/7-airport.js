export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
    if (typeof name === 'string') {
      this._code = code;
    } else {
      throw TypeError('code must be a string');
    }
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
