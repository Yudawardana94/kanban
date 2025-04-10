
import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: `${process.env.VUE_APP_API_KEY}`,
  authDomain: `${process.env.VUE_APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.VUE_APP_DATABASE_URL}`,
  projectId: `${process.env.VUE_APP_PROJECT_ID}`,
  storageBucket: "",
  messagingSenderId: `${process.env.VUE_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.VUE_APP_APP_ID}`
}

firebase.initializeApp(config)

const db = firebase.firestore()
export default db