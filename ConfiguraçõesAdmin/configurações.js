function checkAdmin() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Supomos que o usuário logado está armazenado no Local Storage
    if (loggedInUser.username === 'admin') {
        document.getElementById('admin-status').textContent = 'admin';
        loadConfigPage();
    } else {
        document.getElementById('admin-status').textContent = 'Acesso Negado';
        document.getElementById('config-content').innerHTML = '<p class="error">Você não tem permissão para acessar esta página.</p>';
    }
}

// Função para carregar o conteúdo da página de configurações
function loadConfigPage() {
    const configContent = `
        <div class="code-area">
            <textarea id="code-editor">
// Aqui você pode visualizar e editar o código
// function exampleFunction() {
//     console.log('Exemplo de função');
// }
            </textarea>
            <button onclick="saveChanges()">Salvar Alterações</button>
        </div>
    `;
    document.getElementById('config-content').innerHTML = configContent;
}

// Função para salvar as alterações feitas no código
function saveChanges() {
    const updatedCode = document.getElementById('code-editor').value;
    // Aqui você pode implementar a lógica para salvar o código atualizado
    console.log('Código atualizado:', updatedCode);
    alert('Alterações salvas com sucesso!');
}

// Verificar se o usuário é admin ao carregar a página
checkAdmin();