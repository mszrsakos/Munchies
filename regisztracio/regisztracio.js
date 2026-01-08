document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Megakadályozza az alapértelmezett űrlapküldést

    // Az űrlap adatok kinyerése
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // AJAX kérés küldése
    fetch('http://localhost/munchies/process_register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Sikeres regisztráció!');
        } else {
            alert('Hiba történt: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Hálózati hiba:', error);
        alert('Hálózati hiba történt.');
    });
});