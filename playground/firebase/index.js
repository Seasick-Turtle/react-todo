import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDfBxUKCLE-8yR_O8GKQ4fz5FXa-XioKAY",
  authDomain: "todo-app-72e1d.firebaseapp.com",
  databaseURL: "https://todo-app-72e1d.firebaseio.com",
  projectId: "todo-app-72e1d",
  storageBucket: "todo-app-72e1d.appspot.com",
  messagingSenderId: "328706149164"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Chris',
    age: 24
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Finish watching videos'
});

todosRef.push({
  text: 'Check values in fb and console'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
// console.log('Todo id: ', newNoteRef.key);