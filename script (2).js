// Validation du formulaire côté client
document.getElementById('contact-form').addEventListener('submit', function(e) {
  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    e.preventDefault();
    alert('Veuillez saisir une adresse email valide.');
  }
});