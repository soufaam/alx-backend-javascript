import { taskFirst, taskNext } from '../0-constants';

describe('jest test for 0-constant js file', () => {
  it('constants', () => {
    expect.assertions(1);
    expect(`${taskFirst()} ${taskNext()}`).toBe('I prefer const when I can. But sometimes let is okay');
  });
});
