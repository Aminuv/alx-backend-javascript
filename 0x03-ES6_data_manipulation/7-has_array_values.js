export default function hasValuesFromArray(set, arr) {
  return arr.every((elmt) => set.has(elmt));
}
