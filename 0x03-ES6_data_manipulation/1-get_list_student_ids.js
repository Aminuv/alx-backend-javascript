export default function getListStudentIds(studentArr) {
  if (!Array.isArray(studentArr)) {
    return [];
  }
  return studentArr.map((studentObj) => studentObj.id);
}
