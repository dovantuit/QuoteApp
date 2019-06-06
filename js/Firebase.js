import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  
  apiKey: 'AIzaSyA6tkgjtd0DNcgz89GMqbt98NqPKJScfC4',
  authDomain: 'AUTHDOMAIN',
  databaseURL: 'https://uhouse-2e259.firebaseio.com',
  projectId: 'uhouse-2e259',
  storageBucket: 'gs://uhouse-2e259.appspot.com',
  messagingSenderId: 'MESSAGINGSENDERID',
  appId: 'uhouse-2e259'
};

export default class Firebase {
  static db;

  static init() {
    firebase.initializeApp(config);
    Firebase.db = firebase.firestore();
  }
}

