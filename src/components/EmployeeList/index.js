import React, { Component } from "react";
import AddEmployee from "../AddEmployee";
import "./index.css";

// Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

// Icons + Color
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Fab from "@material-ui/core/Fab";
import LeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import RightIcon from "@material-ui/icons/KeyboardArrowRight";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";

// Services
import dataLoader from "../../services/dataLoader";
import { CircularList, Employee } from "../../services/circularListService";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.list = new CircularList();
    this.state = {
      employee: null,
      dialog: false
    };

    this.getPrev = this.getPrev.bind(this);
    this.getNext = this.getNext.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.newEmployee = this.newEmployee.bind(this);
  }

  componentWillMount(){ 
    dataLoader(this.list);
    this.setState({
        employee: this.list.first
    })
  }

  getPrev(employee) {
    this.setState({
      employee: this.state.employee.prev
    });
  }
  getNext(employee) {
    this.setState({
      employee: this.state.employee.next
    });
  }
  openDialog() {
    this.setState({
      dialog: true
    });
  }
  closeDialog() {
    this.setState({
      dialog: false
    });
  }
  newEmployee(name, email, empId) {
    var employee = new Employee(name, email, empId);
    this.list.addNewEmployee(employee);
    this.setState({
      dialog: false
    });
  }

  render() {
    return (
      <div>
        <div className="Card-Section">
          <Card className="card">
            <CardActionArea>
              <div className="imageContainer">
                <CardMedia
                  className="card-image"
                  image="https://png.pngtree.com/svg/20161217/avatar__181424.png"
                  title="Contemplative Reptile"
                />
              </div>
              <CardContent className="cardContent">
                <span className="empId">
                  #{this.state.employee.data.employeeId}
                </span>
                <Typography variant="h5" component="h2">
                  {this.state.employee.data.name}
                </Typography>
                <span className="email">{this.state.employee.data.email}</span>
              </CardContent>
            </CardActionArea>
          </Card>
          <MuiThemeProvider theme={theme}>
            <div className="bottomNavBar">
              <Fab
                onClick={this.getPrev}
                className="leftBtn"
                color="primary"
                aria-label="Add"
              >
                <LeftIcon />
              </Fab>
              <Fab onClick={this.openDialog} color="primary" aria-label="Add">
                <AddIcon />
              </Fab>
              <Fab
                onClick={this.getNext}
                className="rightBtn"
                color="primary"
                aria-label="Add"
              >
                <RightIcon />
              </Fab>
            </div>
          </MuiThemeProvider>
        </div>
        <Dialog open={this.state.dialog} aria-labelledby="form-dialog-title">
          <AddEmployee newEmployee={this.newEmployee} />
        </Dialog>
      </div>
    );
  }
}

export default EmployeeList;
