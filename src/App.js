import React, { useState } from "react";
import wineData from "./wineData";
import RenderTable from "./components/RenderTable";
import { calculateClassWiseStats, calculateGamma } from "./utils/Utils";

const App = () => {
  // Calculate class-wise statistics for Flavanoids
  const flavanoidsStats = calculateClassWiseStats(wineData, "Flavanoids");

  // Calculate class-wise statistics for Gamma
  const gammaStats = calculateGamma(wineData);

  return (
    <div>
      {/* Render table for Flavanoids statistics */}
      <RenderTable stats={flavanoidsStats} property="Flavanoids" />

      {/* Render table for Gamma statistics */}
      <RenderTable stats={gammaStats} property="Gamma" />
    </div>
  );
};

export default App;
