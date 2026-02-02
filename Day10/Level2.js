const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const union = new Set([...a , ...b]);
console.log(union);

const intersection = new Set(
    [...a].filter((number) => b.includes(number))
);
console.log(intersection);

const difference = new Set(
    [...a].filter((number) => !b.includes(number))
);
console.log(difference);
