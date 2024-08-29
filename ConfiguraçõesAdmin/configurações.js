const users = [
    { username: "admin", password: "12345", profilePic: "img/bxs-crown.svg" },
    { username: "user", password: "senha123", profilePic: "img/bxs-user-circle.svg" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

     //Verifica as credenciais
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        message.style.color = "green";
        message.textContent = "Login bem-sucedido!";
        
        
        localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else {
        message.style.color = "red";
        message.textContent = "Usuário ou senha incorretos.";
    }
});//falta colocar a pagina q vai ser encaminhado!