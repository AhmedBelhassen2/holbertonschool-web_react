interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  const student1: Student = {
    firstName: 'Ahmed',
    lastName: 'Belhasssen',
    age: 23,
    location: 'Tunis',
  }
  
  const student2: Student = {
    firstName: 'Yasmine',
    lastName: 'Othmani bel haj khalifa',
    age: 22,
    location: 'États-Unis',
  }
  const studentList = [student1, student2];
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  studentList.forEach((data) => {
    const row = document.createElement('tr');
    const cellName = document.createElement('td');
    const cellLocation = document.createElement('td');
    cellName.textContent = data.firstName;
    cellLocation.textContent = data.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);