const avengers = [
    {
        id: 1,
        firstName: 'Peter',
        lastName: 'Parker',
        age: 21,
        registered: true,
    },
    {
        id: 2,
        firstName: 'Tony',
        lastName: 'Stark',
    }
]
const ages = [25, 21, 35, 31, 28]
//map

const newArray = ages.map((item, index, array) => {
    return item + 1;
})
console.log('New array: ', newArray);



//filter
//reduce
//find
//findIndex
//some
//every