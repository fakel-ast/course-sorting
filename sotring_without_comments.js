// Список курсов
let courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Lol 1", prices: [50, 75]},
    {name: "Lol 2", prices: [50, 700]},
    {name: "Lol 3", prices: [50, null]},
    {name: "Lol 4", prices: [null, 50]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
];

console.log(courses.map(course => course.prices))
// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


const isGreater = (priceOne, priceTwo) => {
    if (priceOne === null || priceTwo === null) {
        return true;
    } else if (priceOne >= priceTwo) {
        return true;
    }
    return false;
}

const sortingCourses = courses => {
    return courses.sort((a, b) => (a.prices[0] || 0) - (b.prices[0]) || 0)
}

const courseFiltering = (inputData) => {
    const {range, courses} = inputData;
    const [rangeStart, rangeEnd] = range
    const filteredCourses = courses.filter(course => {
        const [priceStart, priceEnd] = course.prices;
        if (rangeStart === null) {
            return isGreater(rangeEnd, priceStart)
        } else if (rangeEnd === null) {
            return isGreater(priceEnd, rangeStart)
        }
        return (isGreater(rangeStart, priceStart) || isGreater(rangeEnd, priceStart)) && isGreater(priceEnd, rangeStart)
    })
    return sortingCourses(filteredCourses)
}

const result1 = courseFiltering({range: requiredRange1, courses});
const result2 = courseFiltering({range: requiredRange2, courses});
const result3 = courseFiltering({range: requiredRange3, courses});
