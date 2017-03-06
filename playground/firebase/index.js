import firebase from 'firebase';

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAoDNb3fvjRb8DUvsOml8yV7vKsleWLXZU",
   authDomain: "todo-app-6caf7.firebaseapp.com",
   databaseURL: "https://todo-app-6caf7.firebaseio.com",
   storageBucket: "todo-app-6caf7.appspot.com",
   messagingSenderId: "802133845211"
 };
 firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
//Gravar dados no firebase
firebaseRef.set({
  app:{
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'André',
    age: 25
  }
});

var notesRef = firebaseRef.child('notes');
var newNoteRef = notesRef.push({
  text: 'Walk the dog!'
});

// //Atualizar nos especifico
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'New name'
// }).then(()=>{
//   console.log('Update sucess');
// }, (e)=>{
//   console.log('Update fails');
// })
//
// //Excluindo registro do firebase
// //firebaseRef.child('app/name').remove();
//
// //Excluindo registro do firebase
// firebaseRef.child('app').update({
//   name: null
// });


//Obtendo todos dados do firebase
// firebaseRef.once('value').then((snapshot)=>{
//   console.log('Got entire database', snapshot.val());
// }, (e)=>{
//   console.log('Unable to fetch value');
// });
//
// //Obtendo dados de um no especifico do firebase
// firebaseRef.child('app').once('value').then((snapshot)=>{
//   console.log('Got entire database', snapshot.key , snapshot.val());
// }, (e)=>{
//   console.log('Unable to fetch value');
// });
