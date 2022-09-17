// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCGwZuRbER85066CasbODQaYvIxscKxJ-w",
    authDomain: "chatapp-2cf9c.firebaseapp.com",
    databaseURL: "https://chatapp-2cf9c-default-rtdb.firebaseio.com",
    projectId: "chatapp-2cf9c",
    storageBucket: "chatapp-2cf9c.appspot.com",
    messagingSenderId: "1028940149856",
    appId: "1:1028940149856:web:0529aed46c52421dd4ff05"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



