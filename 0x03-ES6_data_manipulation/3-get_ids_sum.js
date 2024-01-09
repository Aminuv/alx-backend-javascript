export default function getStudentIdsSum(studentArr) {
  return studentArr.reduce((sumIds, current) => sumIds + current.id, 0);
}
