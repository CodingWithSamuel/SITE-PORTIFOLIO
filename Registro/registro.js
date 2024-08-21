function verificarAdmin() {
            const admin = prompt("Digite a senha de administrador para acessar o painel de aprovação:");
            const senhaAdmin = "admin123"; // Defina uma senha para o administrador

            if (admin === senhaAdmin) {
                document.getElementById('aprovarUsuariosBtn').style.display = 'block';
            } else {
                alert("Acesso negado!");
            }
        }

        function registrarUsuario() {
            const nome = document.getElementById('nome').value;
            const formacao = document.getElementById('formacao').value;
            const contribuicao = document.getElementById('contribuicao').value;
            const gmail = document.getElementById('gmail').value;
            const senha = document.getElementById('senha').value;

            const usuario = {
                nome,
                formacao,
                contribuicao,
                gmail,
                senha,
                aprovado: false // Inicialmente não aprovado
            };

            // Salvar o usuário no Local Storage
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            usuarios.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            alert('Usuário registrado com sucesso!');
            document.getElementById('registroForm').reset(); // Limpa o formulário
        }

        function aprovarUsuarios() {
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            if (usuarios.length === 0) {
                alert('Nenhum usuário registrado.');
                return;
            }

            let mensagem = 'Usuários registrados:\n';
            usuarios.forEach((usuario, index) => {
                mensagem += `${index + 1}. ${usuario.nome} - ${usuario.formacao} - ${usuario.contribuicao} - ${usuario.gmail}\n`;
            });

            const num = prompt(mensagem + '\nDigite o número do usuário que deseja aprovar:');
            const indice = parseInt(num) - 1;

            if (indice >= 0 && indice < usuarios.length) {
                usuarios[indice].aprovado = true;
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                alert(`Usuário ${usuarios[indice].nome} aprovado!`);
            } else {
                alert('Número inválido!');
            }
        }

        // Chame a função para verificar se o usuário é admin ao carregar a página
        verificarAdmin();