import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyAONYxxe7EWuAOE151acuwwMhIPAcFqPsI",
	authDomain: "story-telling-app-7c632.firebaseapp.com",
	databaseURL: "https://story-telling-app-7c632-default-rtdb.firebaseio.com",
	projectId: "story-telling-app-7c632",
	storageBucket: "story-telling-app-7c632.appspot.com",
	messagingSenderId: "1033061041740",
	appId: "1:1033061041740:web:a313321220592137f116e9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
