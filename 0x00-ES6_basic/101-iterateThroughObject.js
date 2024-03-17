export default function iterateThroughObject(reportWithIterator) {
  let value = '';
  let idx = 0;
  for (const val of reportWithIterator) {
    if (idx >= reportWithIterator.length - 1) {
      value += `${val}`;
    } else {
      value += `${val} | `;
    }
    idx += 1;
  }
  return value;
}
