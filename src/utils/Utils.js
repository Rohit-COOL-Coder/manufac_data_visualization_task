export const calculateMean = (values) => {
  // Mean is the average of a set of values
  const sum = values.reduce((acc, val) => acc + Number(val), 0);
  return sum / values.length;
};

export const calculateMedian = (values) => {
  // Median is the middle value of a sorted set of values
  const sortedValues = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sortedValues.length / 2);

  if (sortedValues.length % 2 === 0) {
    return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
  } else {
    return sortedValues[middle];
  }
};

export const calculateMode = (values) => {
  // Mode is the most frequently occurring value in a set
  const countMap = {};
  values.forEach((val) => {
    countMap[val] = (countMap[val] || 0) + 1;
  });

  let mode;
  let maxCount = 0;

  Object.keys(countMap).forEach((key) => {
    if (countMap[key] > maxCount) {
      mode = key;
      maxCount = countMap[key];
    }
  });
  return Number(mode);
};

// Function to calculate class-wise statistics (Mean, Median, Mode)
export const calculateClassWiseStats = (
  data,
  property,
  additionalValues = null
) => {
  // Extracting unique class labels from the dataset
  const classes = Array.from(new Set(data.map((entry) => entry.Alcohol)));
  const stats = {};

  classes.forEach((cls) => {
    const classData = data.filter((entry) => entry.Alcohol === cls);

    // Using additionalValues if provided, otherwise extracting property values
    const values = additionalValues
      ? additionalValues
      : classData.map((entry) => entry[property]);

    // Calculating Mean, Median, and Mode for the current class
    stats[cls] = {
      Mean: calculateMean(values),
      Median: calculateMedian(values),
      Mode: calculateMode(values),
    };
  });
  return stats;
};

// Function to calculate class-wise statistics for the "Gamma" property
export const calculateGamma = (data) => {
  const gammaValues = data.map(
    (entry) => (entry.Ash * entry.Hue) / entry.Magnesium
  );
  // Using calculateClassWiseStats to calculate statistics for "Gamma"
  return calculateClassWiseStats(data, "Gamma", gammaValues);
};
