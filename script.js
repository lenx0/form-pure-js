document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const termsAccepted = document.getElementById('terms').checked;

    if (email && termsAccepted) {
        alert("Obrigado por se inscrever!");
    } else {
        alert("Por favor, preencha o e-mail e aceite os termos de uso.");
    }
});
