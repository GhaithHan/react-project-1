import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

 










 

// database.ref('expense').on('child_removed', (snapdhot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expense').on('child_changed', (snapdhot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expense').on('child_added', (snapdhot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses')
// .on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log(expenses);

// });

// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 45445,
//   createdAt: 543453456345
// });


// database.ref('notes/-LPHgGCDagpca-KEPAj1').remove();  


// database.ref('notes').push({ 
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });


// database.ref('notes').set(notes);
// database.ref('notes/12');

// database.ref().set({
//   name: 'Ghaith Hannachi',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     titile: 'Software Developer',
//     company: 'Google'
//   },
//   isSingle: true,
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((error) => {
//   console.log('this failed.', error)
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// })


// database.ref('age').set(27);
// database.ref('location/city').set('Tunis');


// const GhaithRef = database.ref()
// GhaithRef.remove()
// .then(() => {
//   console.log("Removed succeffuly!!!")
// })
// .catch((e) => {
//   console.log('Remove failed', e)
// })
