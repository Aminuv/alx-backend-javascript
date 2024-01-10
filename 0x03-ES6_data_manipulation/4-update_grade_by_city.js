export default function updateStudentGradeByCity(studentArr, Location, newGradesArray) {
  return studentArr
    .filter((studentObj) => studentObj.location === Location)
    .map((studentObj) => {
      const studentNewGrade = newGradesArray.find((grade) => grade.studentId === studentObj.id);
      let grade = 'N/A';
      if (studentNewGrade) {
        grade = studentNewGrade.grade;
      }
      return { ...studentObj, grade };
    });
}
