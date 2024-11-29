

  const users = [
    { id: 1, username: "sara_Ben", email: "sara.belbachir1@gmail.com", password: "sara1234" },
    { id: 2, username: "Yaacoub_P", email: "yaacoub_Ploof@gmail.com", password: "yaacoub1234" }
  ];
  
  function validateUser(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) return true;
    
    alert("Email ou mot de passe incorrect.");
    document.getElementById("errorMessage").textContent = "Email ou mot de passe incorrect.";
    return false;
  }
  
  function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    document.getElementById("errorMessage").textContent = "";
    if (validateUser(email, password)) window.location.href = "home.html";
  }
  
  
  
