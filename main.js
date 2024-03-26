// 1)

function getFullName(firstName, lastName) {
    return {
        firstName,
        lastName,
        age: 20
    };
}
let users = getFullName('Ann', 'Smith');
console.log(users);


// 2)

function printCoordinates(x, y) {
    return {
          x,
          y
};
}
let point = printCoordinates(13, 25);
console.log(point);


// 3)

const data = {
        products: [
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' }
        ]
}
console.log(data);

function printProductNames({
    products
}) {
    products.forEach(({name}) => {
        console.log(`name: ${name}`);
    });
}
printProductNames(data);


