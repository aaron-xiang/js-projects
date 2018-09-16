const form = document.getElementById('form1');
form.addEventListener('submit', checkform);

const greeting = document.getElementById('greeting');

function checkform(event) {
    event.preventDefault();
    const name = form.elements.namedItem('name').value;
    greeting.innerHTML = `Hello ${name}`;
    return false;
}