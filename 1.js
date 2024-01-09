const calibrationDocument = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`.split('\n')

// Function to extract the calibration values
const extractCalibrationValues = (lines, useLetters) => {
  let sum = 0;

  for (const line of lines) {
    let digits = line.match(/\d+|[a-z]+/gi);

    console.log(digits);

    if (useLetters) {
      // Convert spelled-out digits to actual digits
      digits = digits.map(digit => {
        const spelledDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const index = spelledDigits.indexOf(digit);

        return index !== -1 ? index + 1 : digit;
      });
    }

    // Extract first and last digit, convert to a two-digit number, and add to the sum
    sum += parseInt(digits[0].toString() + digits[digits.length - 1].toString());
  }

  return sum;
};

// Part One
const sumPartOne = extractCalibrationValues(calibrationDocument, false);
console.log('Part One:', sumPartOne);

// Part Two
const sumPartTwo = extractCalibrationValues(calibrationDocument, true);
console.log('Part Two:', sumPartTwo);
