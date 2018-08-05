// console.log('destructuring');

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { temp: temperature, city } = person.location;

// console.log(`${firstName} is ${age}.`);

// console.log(`It's ${temperature} in ${city}.`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher:  {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = "Self-published" } = book.publisher

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'PA', '19167'];

// console.log(`You are in ${address[1]} ${address[2]}`)
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [drink, medPrice] = item
console.log(`A medium ${drink} costs ${medPrice}`)
