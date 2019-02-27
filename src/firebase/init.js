import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAwwUBkWANZUqNrbBuQ-1wBRRuzzYnyo1g",
    authDomain: "blackfriday-783ff.firebaseapp.com",
    databaseURL: "https://blackfriday-783ff.firebaseio.com",
    projectId: "blackfriday-783ff",
    storageBucket: "blackfriday-783ff.appspot.com",
    messagingSenderId: "918316474545"
};

const firebaseApp =  firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()