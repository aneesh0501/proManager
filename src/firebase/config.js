import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAwx6qBACgbyGqNVL8ajH0I4YHrMTzZb9E",
    authDomain: "promanager-5442d.firebaseapp.com",
    projectId: "promanager-5442d",
    storageBucket: "promanager-5442d.appspot.com",
    messagingSenderId: "86558419292",
    appId: "1:86558419292:web:f8b5212e64fb4dcbd83999"
  }


 // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }

