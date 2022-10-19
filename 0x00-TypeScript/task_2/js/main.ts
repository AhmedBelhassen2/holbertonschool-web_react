interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }

  class Director implements DirectorInterface {
    workFromHome(): string { return 'Working from home' }
    getCoffeeBreak(): string { return 'Getting a coffee break' }
    workDirectorTasks(): string { return 'Getting to director tasks' }
  }
  
 class Teacher implements TeacherInterface {
    workFromHome(): string { return 'Cannot work from home' }
    getCoffeeBreak(): string { return 'Cannot have a break' }
    workTeacherTasks(): string { return 'Getting to work' }
  }

    const createEmployee = (salary: string | number): TeacherInterface | DirectorInterface => {
    return (typeof salary === "number" && salary < 500) ? new Teacher() : new Director()
}

 function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
   function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let msg;
  
    if (isDirector(employee)) {
      msg = employee.workDirectorTasks();
    } else {
      msg = employee.workTeacherTasks();
    }
  
    console.log(msg);
    return msg;
  }

  type Subjects = "Math" | "History";

 function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

