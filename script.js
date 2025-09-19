function togglemenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQw729MKqi12aRQjAW6r2u1kVoXlSy3_FD4eMTyOZh8GxaAPwJY8RZRFSNY9VUDTHHPw/exec';
const form = document.forms['contact-form']; 

form.addEventListener('submit', e => {
    e.preventDefault(); 
const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberPattern = /^\d{10}$/;

    if (!emailPattern.test(email)) {
        alert("❌ Please enter a valid email address.");
    } else if (!numberPattern.test(number)) {
        alert("❌ Please enter a valid 10-digit contact number.");
    } else 
    fetch(scriptURL, { method: 'POST', body: new FormData(form) }) 
        .then(response => {
            alert("Thank you! Your form has been submitted successfully.");
        })
        .then(() => {
            window.location.reload();
        })
        .catch(error => console.error('Error!', error.message));
});
