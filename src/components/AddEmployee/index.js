import React, { Component } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      employeeId: ""
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addEmployee() {
    this.props.newEmployee(
      this.state.name,
      this.state.email,
      this.state.employeeId
    );
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Full Name"
            type="text"
            ref="name"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            ref="email"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="employeeId"
            name="employeeId"
            label="Employee ID"
            type="text"
            onChange={this.handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.addEmployee} color="primary">
            Add
          </Button>
        </DialogActions>
      </div>
    );
  }
}

export default AddEmployee;
