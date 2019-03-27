import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
// Initialize Firebase
var config = {
    apiKey: "ishjdhfksdjvhsdfdjhksdfds",
    authDomain: "asdsadasddd-783ff.firebaseapp.com",
    databaseURL: "testedevelop.firebaseio.com",
    projectId: "testedevelop-783ff",
    storageBucket: "testedevelop-783ff.appspot.com",
    messagingSenderId: "9999864674545"
};


const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()
