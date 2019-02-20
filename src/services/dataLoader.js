import { Employee } from "./circularListService";
var data = [
  {
    name: "Ashish",
    email: "ashish@xyz.com",
    employeeId: "emp001"
  },
  {
    name: "Mehul",
    email: "mehul@xyz.com",
    employeeId: "emp002"
  },
  {
    name: "Pavan",
    email: "pavan@xyz.com",
    employeeId: "emp003"
  },
  {
    name: "Prashant",
    email: "prashant@xyz.com",
    employeeId: "emp004"
  }
];

export default function(list) {
  data.forEach(function(emp) {
    var employee = new Employee(emp.name, emp.email, emp.employeeId);
    list.addNewEmployee(employee);
  });
}
