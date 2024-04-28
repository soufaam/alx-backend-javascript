export default function hasValuesFromArray(set, array) {
  let bool = false;
  for (const iterator of array) {
    if (set.has(iterator)) {
      bool = true;
    } else {
      return false;
    }
  }
  return bool;
}
