var firebaseConfig = {
  apiKey: "AIzaSyAHEpqWlK6sMXL3jgDF2flTGgEqhmrJ9cM",
  authDomain: "chatvi-408b5.firebaseapp.com",
  databaseURL: "https://chatvi-408b5-default-rtdb.firebaseio.com",
  projectId: "chatvi-408b5",
  storageBucket: "chatvi-408b5.appspot.com",
  messagingSenderId: "294827743870",
  appId: "1:294827743870:web:08d24e5d9cc982a3bb162f",
  measurementId: "G-5ZDKHLYZRL"
};
  
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Bem-vindo " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  