import { getLast, taskFirst, taskNext } from '../0-constants';

describe('jest test for 0-constant js file', () => {
  it('constants', () => {
    expect.assertions(3);
    expect(taskFirst()).toBe('I prefer const when I can.');
    expect(getLast()).toBe(' is okay');
    expect(taskNext()).toBe(`But sometimes let${getLast()}`);
  });
});
