document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM carregado"); // Depuração
    carregarUsuariosParaAprovacao();
});


function mostrarMenuAprovacao() {
    const menu = document.getElementById("userApprovalMenu");
    if (menu) {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    } else {
        console.log("Elemento userApprovalMenu não encontrado"); // Depuração
    }
}


function carregarUsuariosParaAprovacao() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.log("Usuários carregados:", usuarios); // Depuração
    const usuariosLista = document.getElementById("usuariosLista");

    // Limpa o conteúdo atual
    usuariosLista.innerHTML = "";

    if (usuarios.length === 0) {
        usuariosLista.textContent = "Nenhum usuário registrado.";
        return;
    }

    // Adiciona os usuários não aprovados ao menu
    usuarios.forEach((usuario, index) => {
        if (!usuario.aprovado) {
            const userDiv = document.createElement("div");
            userDiv.textContent = `${usuario.nome} - ${usuario.formacao} - ${usuario.contribuicao}`;
            const approveButton = document.createElement("button");
            approveButton.textContent = "Aprovar";
            approveButton.onclick = () => aprovarUsuario(index);
            userDiv.appendChild(approveButton);
            usuariosLista.appendChild(userDiv);
        }
    });
}


function aprovarUsuario(index) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios[index].aprovado = true;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert(`Usuário ${usuarios[index].nome} aprovado!`);
    carregarUsuariosParaAprovacao(); // Atualiza a lista sem recarregar a página
}

function toggleMenu() {
    const menu = document.getElementById("adminMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
