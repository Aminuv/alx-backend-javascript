interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "amine",
  lastName: "mrbe",
  age: 29,
  location: 'Canada'
};

const student2: Student = {
  firstName: "Salma",
  lastName: "hqdy",
  age: 18,
  location: 'London'
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLElement = document.createElement("table");

studentsList.forEach((student) => {
  const tr: HTMLElement = document.createElement("tr");
  const tdFirstName: HTMLElement = document.createElement("td");
  const tdLocation: HTMLElement = document.createElement("td");

  tdFirstName.textContent = student.firstName;
  tdLocation.textContent = student.location;

  tr.append(tdFirstName);
  tr.append(tdLocation);
  table.append(tr);
});
document.body.append(table);
