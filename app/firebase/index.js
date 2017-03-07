import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyAoDNb3fvjRb8DUvsOml8yV7vKsleWLXZU",
      authDomain: "todo-app-6caf7.firebaseapp.com",
      databaseURL: "https://todo-app-6caf7.firebaseio.com",
      storageBucket: "todo-app-6caf7.appspot.com",
      messagingSenderId: "802133845211"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
