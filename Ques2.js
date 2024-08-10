const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);
console.log("Sorted ages:", ages);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Min age:", minAge);
console.log("Max age:", maxAge);

// Find the median age
const middleIndex = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    medianAge = ages[middleIndex];
}
console.log("Median age:", medianAge);

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log("Average age:", averageAge);

// Find the range of the ages
const ageRange = maxAge - minAge;
console.log("Range of ages:", ageRange);

// Compare the value of (min - average) and (max - average)
const compareMinAvg = Math.abs(minAge - averageAge);
const compareMaxAvg = Math.abs(maxAge - averageAge);
console.log("Absolute difference between min and average age:", compareMinAvg);
console.log("Absolute difference between max and average age:", compareMaxAvg);
