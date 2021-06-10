import React from "react";
import shortid from "shortid";

const Result = ({ result }) => {
  let arr = [];
  for (let i = 0; i < result.length; i++) {
    let className = i === 0 ? "green" : "";

    arr.push(
      <tr key={shortid.generate()}>
        <td>{result[i].label}</td>
        <td className={className}>{result[i].score}</td>
      </tr>
    );
  }

  return (
    <table className="results">
      <tbody className="score">
        <tr>
          <th>Items</th>
          <th>Score</th>
        </tr>
        {arr}
      </tbody>
    </table>
  );
};

export default Result;
