export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [key, i] of map.entries()) {
    if (i === 1) map.set(key, 100);
  }
  return map;
}
