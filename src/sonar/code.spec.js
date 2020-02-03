const { funSum, objectSum } = require('./code');

describe('Test - app', () => {

  beforeEach(() => { });
  afterEach(() => { });

  it('check sum of 1+1=2', () => {
    expect(1 + 1).toEqual(2);
  });

  it('pass if sumFun(1+1) returns 2', async () => {
    const sum = await funSum(1, 1);
    expect(sum).toEqual(2);
  });

  it('pass if objectSum has sum', () => {
    const object = objectSum(1, 1);
    expect(object).toBeObject();
    expect(object).toContainKey('sum');
    expect(object.sum).toEqual(2);
  });
});