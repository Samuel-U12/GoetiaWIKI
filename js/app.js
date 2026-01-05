const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


// Validação de Formulário (CPF e Telefone)

function validarCPF(cpf) {

    const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    
    if (!regexCPF.test(cpf)) {
        return false;
    }

    
    return true; 
}


function validarTelefone(telefone) {
    
    const regexTelefone = /^\(\d{2}\)\s\d{5}\-\d{4}$/; 

    
    const telefoneLimpo = telefone.trim();
    return regexTelefone.test(telefoneLimpo);
}

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
             e.preventDefault();
            alert('Formulário enviado com sucesso!'); 
            window.location.href = "index.html";
        }
    });
}
