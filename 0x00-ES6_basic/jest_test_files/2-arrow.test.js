import getNeighborhoodsList from '../2-arrow';

describe('jest test for 2-arrow js file', () => {
  it('returns the list of neighborhoods', () => {
    expect.assertions(1);
    const neighborhoodsList = new getNeighborhoodsList();
    expect(neighborhoodsList.addNeighborhood('Tenderloin')).toStrictEqual(['SOMA', 'Union Square', 'Tenderloin']);
  });
});
