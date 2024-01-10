export default function cleanSet(set, start_string) {
  if (set && (set instanceof Set) && start_string && typeof (start_string) === 'string') {
    return Array.from(set)
      .filter((x) => x && x.startsWith(start_string))
      .map((x) => x.replace(start_string, ''))
      .join('-');
  }
  return '';
}
