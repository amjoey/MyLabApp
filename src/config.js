import Firebase from 'firebase';  
let config = {  
  apiKey: 'AIzaSyDTBW39xhbVHWhtgicBKvj1G7R2UPaBfhA',
  authDomain: 'reactnative-4c15b.firebaseapp.com',
  databaseURL: 'https://reactnative-4c15b.firebaseio.com',
  projectId: 'reactnative-4c15b',
  storageBucket: 'reactnative-4c15b.appspot.com',
  messagingSenderId: '373771794709'
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  