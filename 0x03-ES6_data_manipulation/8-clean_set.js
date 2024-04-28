export default function cleanSet(set, startString) {
  let string = '';
  if (startString === '' || typeof startString !== 'string') {
    return string;
  }
  for (const iterator of set) {
    if (typeof iterator === 'string' && iterator.startsWith(startString)) {
      string += iterator.substring(startString.length);
      string += '-';
    }
  }
  return string.slice(0, -1);
}
