const firebaseConfig = {
    apiKey: "AIzaSyBGdA9l8FCkQs2v4860DBcjpPaF-6FydqQ",
    authDomain: "stud-4302c.firebaseapp.com",
    databaseURL: "https://stud-4302c-default-rtdb.firebaseio.com",
    projectId: "stud-4302c",
    storageBucket: "stud-4302c.appspot.com",
    messagingSenderId: "628977512024",
    appId: "1:628977512024:web:425774b20065e0467ca42d"
};


firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

const user = firebase.auth().currentUser;