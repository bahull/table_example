import React from "react";

function Table(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>{props.headers}</tr>
          {props.values}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
