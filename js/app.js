const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


// Validação de Formulário (CPF e Telefone)

function validarCPF(cpf) {
    // Regex para o padrão brasileiro: 000.000.000-00
    // Opcionalmente, pode-se remover pontos e traços, mas usaremos para forçar a formatação.
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    // Validação básica do padrão
    if (!regexCPF.test(cpf)) {
        return false;
    }

    // A validação completa de CPF (cálculo de dígitos verificadores) é mais complexa.
    // Para cumprir o objetivo do trabalho, a verificação do PADRÃO com RegEx é suficiente.
    return true; 
}

// Função de Validação de Telefone com RegEx
function validarTelefone(telefone) {
    // Regex para o padrão brasileiro: (00) 00000-0000 (com 9º dígito)
    const regexTelefone = /^\(\d{2}\)\s\d{5}\-\d{4}$/; 

    // Remove espaços e verifica o padrão
    const telefoneLimpo = telefone.trim();
    return regexTelefone.test(telefoneLimpo);
}

// Interceptando o envio do formulário
const form = document.getElementById('feedbackForm');

if (form) {
    form.addEventListener('submit', function(e) {
        // Assume que a validação inicial é verdadeira
        let isValid = true;

        // 1. Validar CPF
        const cpfInput = document.getElementById('cpf');
        const cpfHelp = document.getElementById('cpfHelp');
        const cpfValue = cpfInput.value.trim();

        if (cpfValue && !validarCPF(cpfValue)) {
            cpfHelp.textContent = 'CPF inválido. Use o formato 000.000.000-00.';
            isValid = false;
        } else {
            cpfHelp.textContent = ''; // Limpa a mensagem de erro
        }

        // 2. Validar Telefone
        const telefoneInput = document.getElementById('telefone');
        const telefoneHelp = document.getElementById('telefoneHelp');
        const telefoneValue = telefoneInput.value.trim();

        if (telefoneValue && !validarTelefone(telefoneValue)) {
            telefoneHelp.textContent = 'Telefone inválido. Use o formato (00) 00000-0000.';
            isValid = false;
        } else {
            telefoneHelp.textContent = ''; // Limpa a mensagem de erro
        }

        // Se isValid for falso, impede o envio do formulário
        if (!isValid) {
            e.preventDefault(); 
            alert('Por favor, corrija os erros no formulário antes de enviar.');
        } else {
            // Se tudo estiver OK, o formulário envia normalmente. 
            // Você pode adicionar um 'alert' de sucesso aqui, mas por enquanto, deixe enviar.
            alert('Formulário enviado com sucesso!'); 
            // Para testes, você pode prevenir o padrão aqui também para ver a mensagem:
            e.preventDefault();
        }
    });
}
