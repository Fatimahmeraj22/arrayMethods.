// findIndex() method

let stock = [
    {item: 'ketchup', quantity: 32},
    {item: 'mayo',quantity: 9 },
    {item: 'hot sauce', quantity: 12},

];

let mayo = stock.findIndex((S) => S.item === 'mayo');
console.log(mayo) //1