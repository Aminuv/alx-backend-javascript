export default function getStudentsByLocation(studentArr, Location) {
  return studentArr.filter((studentObj) => studentObj.location === Location);
}
