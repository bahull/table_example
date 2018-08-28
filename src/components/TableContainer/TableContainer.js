import React, { Component } from "react";
import Table from "./../Table/Table";

// import axios from "axios";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Bryce", age: 25, height: 6, title: "Maybe", test: "yep" },
        { name: "John", age: 27, height: 5, title: "Maybe", test: "yep" },
        { name: "john", age: 28, height: 4, title: "Maybe", test: "yep" }
      ]
    };
  }
  componentDidMount() {
    // axios.get("https://swapi.co/api/people").then(result => {
    //   console.log(result.data.results);
    //   this.setState({ data: result.data.results });
    // });
  }

  render() {
    let headers =
      this.state.data.length > 0 &&
      Object.keys(this.state.data[0]).map((cur, ind) => {
        return <th key={ind}>{cur}</th>;
      });
    let values =
      this.state.data.length > 0 &&
      this.state.data.map((cur, ind) => {
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
        {this.state.data.length > 0 && (
          <Table headers={headers} values={values} />
        )}
      </div>
    );
  }
}

export default TableContainer;
