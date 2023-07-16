function calculateMeanMedian(numbers) {
    const n = numbers.length;
    const mean = numbers.reduce((acc, curr) => acc + curr, 0) / n;
    const median =
      n % 2 === 0
        ? (numbers[n / 2] + numbers[n / 2 - 1]) / 2
        : numbers[Math.floor(n / 2)];
    return [mean.toFixed(1), median.toFixed(1)];
  }
  
  const inputNumbers = [1, 2, 3, 4];
  const [mean, median] = calculateMeanMedian(inputNumbers);
  console.log(mean, median);
  