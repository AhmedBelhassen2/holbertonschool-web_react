interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any,
}
interface Directors extends Teacher {
    numberOfReports: number,
}

interface printTeacherFunction {
    (firstName: string, lastName: string): void
}
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string =>`${firstName.charAt(0)}. ${lastName}`;

interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
  }
  interface StudentClassInterface {
    firstName: string;
    lastName: string;
  }

  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string { return 'Currently working' }
    displayName(): string { return 'this.lastName' }
}

