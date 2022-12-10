import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCaf1xoBxRUXVZDeS8bQqiNlgWbLWZwzXo",
    authDomain: "olx-clone-480ac.firebaseapp.com",
    projectId: "olx-clone-480ac",
    storageBucket: "olx-clone-480ac.appspot.com",
    messagingSenderId: "31056793230",
    appId: "1:31056793230:web:4b6cc2dbd77b950ba683df"
  };

export default firebase.initializeApp(firebaseConfig)