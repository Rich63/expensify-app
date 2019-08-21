//
// Object Destructuring
//

const person = {
  name: 'Richard',
  age: 56,
  location: {
    city: 'Bleiswijk',
    temp: 26
  }
}

// console.log(`${ person.name } is ${ person.age } `)

// // The ES6 destrucure method
// // Setting a default value for name when name is not defined and give a name of firstName
// const { name: firstName = 'Anonymous', age } = person // get name and age from object person
// console.log(`${ firstName } is ${ age } `)

// console.log(`It is ${ person.location.temp } degrees celsius in ${ person.location.city } `)

// // The ES6 destrucure method
// const { city, temp } = person.location // get city and temp from object person object location
// if (city && temp) {
//   console.log(`It is ${ temp } degrees celsius in ${ city }!!!! `)
// }

// // The ES6 destrucure method another way
// // get object location from object person
// const location = person.location
// // get city and temp from object person object location and rename them to village and temperature
// const { city: village, temp: temperature } = location 
// if (village && temperature) {
//   console.log(`It is ${ temperature } degrees celsius in ${ village } `)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penquin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

//
// Array Destructuring
//

const address = [
  '1299 $ Juniper Street',
  'Philadelphia',
  'Pensilvania',
  '19147'
]

console.log(`You are in ${ address[1] } ${ address[2] }. `)

// Getting address[0] as street, address[1] as city, address[2] as state and address[3] as zip from the array address
// const [ street, city, state, zip ] = address

// below skip address[0] by a , get address[1] as city and address[2] as state from the array address
// If there is no address[2] then the state will be New York becuase it's the default
const [ , city, state = 'New York' ] = address

console.log(`You are in ${ city } ${ state }. `)

//challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [ sort, , price] = item
console.log(`A medium ${ sort } costs ${ price }`)