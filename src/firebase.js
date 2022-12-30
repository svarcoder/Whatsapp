import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
	apiKey: "AIzaSyBdN2w4Rgj_J0vClOamhzJviVLJ0zvB5eA",
	authDomain: "whatsapp-3af91.firebaseapp.com",
	projectId: "whatsapp-3af91",
	storageBucket: "whatsapp-3af91.appspot.com",
	messagingSenderId: "429285851091",
	appId: "1:429285851091:web:2de503b93046d999bab926",
	measurementId: "G-LES5CVPDK1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
