import * as firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

// database.ref().set({
//   name: 'Richard',
//   age: 56,
//   stresslevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Finalist',
//     location: {
//       street: 'Stationsplein',
//       streetNumber: 45,
//       postcode: '3013AK',
//       city: 'Rotterdam',
//       country: 'Netherlands'
//     }
//   },
//   location: {
//     street: "Hazenweg",
//     streetNumber: 67,
//     postcode: "2665CZ",
//     city: "Bleiswijk",
//     country: "Netherlands"
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((error) => {
//   console.log('Something went wrong saving the data!', error)
// })

const onValueChange = database.ref().on('value', (snapshot) => {
    const val = snapshot.val()
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
  }, (e) => {
    console.log('Error fetching data!!!', e)
  })

setTimeout(() => {
  database
    .ref('age')
    .set(45)
}, 3000);

// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 6000);

// setTimeout(() => {
//   database.ref('age').set(55)
// }, 9000);

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   }).catch((error) => {
//     console.log('Something went wrong fetching data!', error)
//   })

// database.ref().set({
//   name: 'Thomas',
//   age: 40,
//   stresslevel: 5,
//   job: {
//     title: 'Senior software developer',
//     company: 'Finalist',
//     location: {
//       street: 'Stationsplein',
//       streetNumber: 45,
//       postcode: '3013AK',
//       city: 'Rotterdam',
//       country: 'Netherlands'
//     }
//   },
//   location: {
//     street: "Huppeldepup",
//     streetNumber: 112,
//     postcode: "1234CZ",
//     city: "Where",
//     country: "Netherlands"
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((error) => {
//   console.log('Something went wrong saving the data!', error)
// })

// database.ref()
//   .update({
//       stresslevel: 9,
//       'job/company': 'Amazone',
//       'job/location/city': 'Maarssen'
//   }).then(() => {
//     console.log('updated the data')
//   }).catch((e) => {
//     console.log('Something went wrong updating!!!', e)
//   })

// database.ref().set('This is my data')

// database.ref('age').set(57)
// database.ref('location/city').set('New York')

// database.ref('attributes').set({
//   heigth: 188,
//   weight: 100
// }).then(() => {
//   console.log('attributes are added!')
// }).catch((error) => {
//   console.log('Something went wrong saving attributes!', error)
// })

// to remove the database
// database.ref()
//   .remove()
//   .then(() => {
//     console.log('data is removed')
//   }).catch((e) => {
//     console.log('Something went wrong removing the data', e)
//   })

// to remove a single field from the database
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle removed')
//   }).catch((e) => {
//     console.log('Something went wrong removing isSingle', e)
//   })

// to remove a single field from the database with set()
// database.ref('isSingle').set(null)
//   .then(() => {
//     console.log('isSingle removed')
//   }).catch((e) => {
//     console.log('Something went wrong removing isSingle', e)
//   })

// to remove all the data with set()
// database.ref().set(null)
//   .then(() => {
//     console.log('data removed')
//   }).catch((e) => {
//     console.log('Something went wrong removing all data', e)
//   })

// database.ref()
//   .update({
//     name: 'Mike', // this will update the fields name to Mike
//     age: 27,  // this will update the field age to 27
//     job: 'Software developer',  // This will add new field job
//     isSingle: null  // this will delete the field isSingle
//   })
//   .then(() => {
//     console.log('name and age is updated!')
//   }).catch((e) => {
//     console.log('Something went wrong updating name and age!!!', e)
//   })

// database.ref('location/')
//   .update({city: 'New York'})
//   .then(() => {
//     console.log('city Bleiswijk is updated to New York')
//   }).catch((e) => {
//     console.log('Something went wrong updating city!!!', e)
//   })

// database.ref()
//   .update({
//       job: 'Manager',
//       'location/city': 'New York'})
//   .then(() => {
//     console.log('job is updated to Manager and city is updated to New York')
//   }).catch((e) => {
//     console.log('Something went wrong updating!!!', e)
//   })
