const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Reset messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    successMessage.textContent = '';

    // Name validation
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required.';
        valid = false;
    } else if (nameInput.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        valid = false;
    }

    // Email validation
    if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
    }

    // Password validation
    if (!passwordInput.value) {
        passwordError.textContent = 'Password is required.';
        valid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
    }

    // Confirm Password validation
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        valid = false;
    }

    if (valid) {
        successMessage.textContent = 'Registration successful! 🎉';
        form.reset();
    }
});