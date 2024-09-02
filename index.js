
/* Menu interativo, If - vereifica qual o tipo de usuario logado, else altera menu conforme o usuario 
Funciton representa o menu interativo (toggleMenu) */

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const adminMenu = document.getElementById("adminMenu");

if (loggedInUser) {

    document.getElementById("login-item").style.display = "none";

    const profilePicContainer = document.getElementById("profile-pic-container");
    const profilePic = document.getElementById("profile-pic");
    profilePic.src = loggedInUser.profilePic;
    profilePicContainer.style.display = "block";

    if (loggedInUser.username === "admin") {
        adminMenu.innerHTML = `
              <li><a href="#" onclick="aprovarUsuarios(event)">Aprovar Usuários</a></li>
              <li><a href=ConfiguraçõesAdmin/configurações.html> Configurações</a></li>
          `;
    } else {
        adminMenu.innerHTML = `
              <li><a href="#">Conta</a></li>
          `;
    }
}

function toggleMenu() {
    const menu = document.getElementById('adminMenu');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function aprovarUsuarios(event) {
    // Evita que o link siga para uma nova página
    event.preventDefault();

    // Exibe o menu
    const modal = document.getElementById("aprovarUsuarioModal");
    modal.style.display = "block";

    // Fecha o menu suspenso
    const menu = document.getElementById('adminMenu');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
}

const closeBtn = document.getElementById("closeBtn");

// Quando o botão de fechar for clicado, o MENU é escondido
closeBtn.onclick = function() {
    const modal = document.getElementById("aprovarUsuarioModal");
    modal.style.display = "none";
}

// Quando o usuário clica fora do conteúdo do MENU, o menu também é escondido
window.onclick = function(event) {
    const modal = document.getElementById("aprovarUsuarioModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const logoutButton = document.getElementById("logout-btn");
logoutButton.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "index.html";
});


function updateProgressBar(progressBarId, progressPercentId, percent) {
    const progressBar = document.getElementById(progressBarId);
    const progressPercent = document.getElementById(progressPercentId);

    progressBar.style.width = percent + '%';
    progressPercent.textContent = percent + '%';
}
updateProgressBar('progressBar1', 'progressPercent1', 20); // BARRA 1
updateProgressBar('progressBar2', 'progressPercent2', 100); // BARRA 2
