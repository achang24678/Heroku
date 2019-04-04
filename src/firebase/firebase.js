import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
//create instance of provider for authentication, provider is a way to provide authentication


// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_SOTRAGE_BUCKE,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

const database = firebase.database();
// we use google provider for authentication here
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

// //child_removed - event that allow us to fetch the removed child data
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed - fire when one of the child chnages
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added - fire when child gets added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];    //creating new array

//         snapshot.forEach((childSnapshot) => {   //iterating all the snapshot
//             expenses.push({     //creating a new item in that array for each one
//                 id: childSnapshot.key,  //set id: .key to fetch id generated on firebase
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];    //creating new array

//     snapshot.forEach((childSnapshot) => {   //iterating all the snapshot
//         expenses.push({     //creating a new item in that array for each one
//             id: childSnapshot.key,  //set id: .key to fetch id generated on firebase
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 123,
//     createdAt: 111
// });



//database.ref('notes/-LbQwXouDmpt2ukTopP2').remove();

// using .push, firebase is gonna automatically create a new property on our reference
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, python'
// });

// const firebaseNotes = {
//     notes: {
//         asfawfwd: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         gkrigkrgidr: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12')


// on allows us to listen, fetch data from firebase initially and everytime it changes, for things over in this case
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });



// //using once we get the data a single time, and funtion never re-runs
// database.ref('location/city')
//     .once('value')  // pass in 'value' to fetch all data, and once returns a promise
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Allen Chang',
//     age: 23,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'San Diego',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// // update
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// use set to remove: passing null to the new value is equivalent to calling remove()
// database.ref('isSingle').set(null);

// // database.ref().set('this is my data');

// // if we pass nothing to ref, its gonna go to the root of the database
// // case: we only want to update age
// database.ref('age').set(28);

// database.ref('location/city').set('Taiwan');

// // set to set value for refence, ref to pick which part of the database we try to change
// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('Second set call worked.')
// }).catch((e) => {
//     console.log('Things didn for the second error', e);
// });

// remove data from database - call on reference
// ref() to remove all database, ref('isSignle') to remove this prop only
// database.ref()
// .remove()
// .then(() => {
//     console.log('data was removed');
// }).catch((error) => {
//     console.log('did not remove data', error);
// });
