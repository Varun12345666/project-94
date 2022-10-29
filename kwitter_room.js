
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBxfeRGy7qm_DmP5i-tVJMtN6ZY0C5fDXw",
      authDomain: "chatapp-76d94.firebaseapp.com",
      projectId: "chatapp-76d94",
      storageBucket: "chatapp-76d94.appspot.com",
      messagingSenderId: "79145516683",
      appId: "1:79145516683:web:9c5e3b9b316f7483c81e8e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
