
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

// 1
const categoryCount = categories.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(categoryCount);

//2
const sortedCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1]);

console.log(sortedCategories);
