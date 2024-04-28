export default function cleanSet(set, startString) {
  let string = '';
  if (startString === '') {
    return string;
  }
  for (const iterator of set) {
    if (iterator.startsWith(startString)) {
      string += iterator.substring(startString.length);
      string += '-';
    }
  }
  return string.slice(0, -1);
}
