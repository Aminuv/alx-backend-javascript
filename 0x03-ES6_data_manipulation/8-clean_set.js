export default function cleanSet(set, startString) {
  if (set && (set instanceof Set) && startString && typeof (startString) === 'string') {
    return Array.from(set)
      .filter((x) => x && x.startsWith(startString))
      .map((x) => x.replace(startString, ''))
      .join('-');
  }
  return '';
}
