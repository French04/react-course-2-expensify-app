//
/////////////////////////////// OBJECT DESTRUCTURING ///////////////////////
//

// const person = {
//     name: 'Andrea',
//     age: 27,
//     location: {
//         city: 'San Marino',
//         temp: 30
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;

// if(city && temperature)
//     console.log(`${temperature} is ${city}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holliday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Publisher'} = book.publisher;

console.log(publisherName);

//
//////////////////////////// ARRAY DESTRUCTURING /////////////////////////////
//


const address = ['Via calintufo 38', 'Borgo Maggiore', 'San Marino', '47893'];

const [ , city, state, postalCode] = address;

console.log(`You are in ${city} ${state}`);



const item = ['coffee (hot)', '€2.00', '€2.50', '€2.75'];

const [kindOff, , mediumPrice] = item;

console.log(`A medium ${kindOff} cost ${mediumPrice} `);