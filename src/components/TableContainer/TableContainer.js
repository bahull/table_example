import React, { Component } from "react";
import Table from "./../Table/Table";

// import axios from "axios";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test1: [
        { name: "Bryce", age: 25, height: 6, title: "Maybe", test: "yep" },
        { name: "John", age: 27, height: 5, title: "Maybe", test: "yep" },
        { name: "john", age: 28, height: 4, title: "Maybe", test: "yep" }
      ],
      test2: [
        { name: "Tony", age: 25, height: 6, title: "Maybe", test: "yep" },
        { name: "Robbie", age: 27, height: 5, title: "Maybe", test: "yep" },
        { name: "Xray", age: 28, height: 4, title: "Maybe", test: "yep" }
      ],
      test3: [
        {
          name: "Bob",
          age: 25,
          height: 6,
          title: "Maybe",
          test: "yep",
          time: "3:24",
          successfulLaunch: "True"
        },
        {
          name: "William",
          age: 27,
          height: 5,
          title: "Maybe",
          test: "yep",
          time: "3:24",
          successfulLaunch: "True"
        },
        {
          name: "Tracy",
          age: 28,
          height: 4,
          title: "Maybe",
          test: "yep",
          time: "3:24",
          successfulLaunch: "True"
        }
      ],
      selectedReport: "test2"
    };
    this.selectReport = this.selectReport.bind(this);
  }
  componentDidMount() {
    // axios.get("https://swapi.co/api/people").then(result => {
    //   console.log(result.data.results);
    //   this.setState({ data: result.data.results });
    // });
  }

  selectReport(e) {
    this.setState({ selectedReport: e.target.value });
  }
  render() {
    let headers =
      this.state[this.state.selectedReport].length > 0 &&
      Object.keys(this.state[this.state.selectedReport][0]).map((cur, ind) => {
        return <th key={ind}>{cur}</th>;
      });
    let values =
      this.state[this.state.selectedReport].length > 0 &&
      this.state[this.state.selectedReport].map((cur, ind) => {
        return (
          <tr key={ind}>
            {Object.values(cur).map((curr, ind) => {
              return <td key={ind}>{curr}</td>;
            })}
          </tr>
        );
      });
    return (
      <div>
        <h2>Reports</h2>
        <select onChange={this.selectReport} defaultValue="test2">
          <option value="test1">Test 1</option>
          <option value="test2">Test 2</option>
          <option value="test3">Test 3</option>
        </select>
        {this.state[this.state.selectedReport].length > 0 && (
          <Table headers={headers} values={values} />
        )}
      </div>
    );
  }
}

export default TableContainer;
