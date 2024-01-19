import React from "react";

// Component to render a table with statistical measures
const RenderTable = ({ stats, property }) => {
  // Extracting class labels from the calculated stats
  const classes = Object.keys(stats);

  // Defining the statistical measures to display in the table
  const measures = ["Mean", "Median", "Mode"];

  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {/* Generating table header with class labels */}
          {classes.map((cls) => (
            <th key={cls}>Class {cls}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Generating table rows for each statistical measure */}
        {measures.map((measure) => (
          <tr key={measure}>
            <td>
              {/* Displaying the property name and the current statistical measure */}
              {property} {measure}
            </td>
            {classes.map((cls) => (
              <td key={`${property}-${measure}-${cls}`}>
                {/* Displaying the calculated value rounded to 3 decimal places */}
                {stats[cls][measure].toFixed(3)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RenderTable;
