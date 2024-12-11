const form = document.getElementById('form-contato');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;

    tbody.appendChild(novaLinha);

    form.reset();
});




