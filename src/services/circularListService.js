class Employee {
  constructor(name, email, employeeId) {
    this.prev = null;
    this.next = null;
    this.data = {
      name,
      email,
      employeeId
    };
  }
}

class CircularList {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  addNewEmployee(employee) {
    if (this.first === null) {
      this.first = employee.prev = employee;
      this.last = employee.next = employee;
    } else {
      employee.prev = this.last;
      employee.next = this.first;
      this.first.prev = employee;
      this.last.next = employee;
      this.last = employee;
    }

    this.length += 1;
  }

  removeEmployee(employee) {
    if (this.length > 1) {
      employee.prev.next = employee.next;
      employee.next.prev = employee.prev;
      if (employee === this.first) this.first = employee.next;
      if (employee === this.last) this.last = employee.prev;
    } else if (this.first === employee) {
      this.first = null;
      this.last = null;
    }
    employee.prev = null;
    employee.next = null;

    this.length -= 1;
  }
}

export { CircularList, Employee };
