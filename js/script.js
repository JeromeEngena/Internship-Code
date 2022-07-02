  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAMCyGoAHJVPArbSqah2oC9O6peS4oopis",
    authDomain: "stratintern.firebaseapp.com",
    projectId: "stratintern",
    storageBucket: "stratintern.appspot.com",
    messagingSenderId: "24548664020",
    appId: "1:24548664020:web:c22ebb9b36085e43959141",
    measurementId: "G-TV0X7EFG51"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function signup(){
    email = document.getElementById('usermail').value,
    password = document.getElementById('password').value

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert('Successful')
    window.location.href = "home.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(failed + errorMessage)
    // ..
  });
  }