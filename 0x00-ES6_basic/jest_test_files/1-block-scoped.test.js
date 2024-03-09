import taskBlock from '../1-block-scoped';

describe('jest Test for 1-block-scoped jd file', () => {
  it('block-scoped', () => {
    expect.assertions(2);
    const mock = [false, true];
    expect(taskBlock(true)).toStrictEqual(mock);
    expect(taskBlock(false)).toStrictEqual(mock);
  });
});
