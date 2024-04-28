export const weakMap = new WeakMap();
export function queryAPI(api) {
  if (weakMap.get(api) === undefined || Number.isNaN(weakMap.get(api))) {
    weakMap.set(api, 1);
  } else if (weakMap.get(api) >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(api, weakMap.get(api) + 1);
  }
}
