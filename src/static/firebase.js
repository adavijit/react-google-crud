import firebase from 'firebase'

const config={
    apiKey: "AIzaSyC1mjuyDTIPb7KRdHNXSuQvTrjSE2szuec",
    authDomain: "test-pro-2f2ba.firebaseapp.com",
    databaseURL: "https://test-pro-2f2ba.firebaseio.com",
    projectId: "test-pro-2f2ba",
    storageBucket: "test-pro-2f2ba.appspot.com",
    messagingSenderId: "123900400786",
    appId: "1:123900400786:web:82f70e872b4335fb96c24b"
}
firebase.initializeApp(config);
export default firebase