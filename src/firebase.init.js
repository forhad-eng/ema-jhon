import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD6XkbNn7h6A7i1bK8vzdQCyw2DR8xPZxc',
    authDomain: 'ema-jhon-official.firebaseapp.com',
    projectId: 'ema-jhon-official',
    storageBucket: 'ema-jhon-official.appspot.com',
    messagingSenderId: '136085289374',
    appId: '1:136085289374:web:dbfa9ae4ebb8d45204fe8f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
