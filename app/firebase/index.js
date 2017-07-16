import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDfBxUKCLE-8yR_O8GKQ4fz5FXa-XioKAY",
    authDomain: "todo-app-72e1d.firebaseapp.com",
    databaseURL: "https://todo-app-72e1d.firebaseio.com",
    projectId: "todo-app-72e1d",
    storageBucket: "todo-app-72e1d.appspot.com",
    messagingSenderId: "328706149164"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;