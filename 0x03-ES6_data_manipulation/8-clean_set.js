export default function cleanSet(set, _startString) {
  if (set && (set instanceof Set) && _startString && typeof (_startString) === 'string') {
    return Array.from(set)
      .filter((x) => x && x.startsWith(_startString))
      .map((x) => x.replace(_startString, ''))
      .join('-');
  }
  return '';
}
