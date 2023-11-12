const custom = document.querySelector('#custom');

custom.addEventListener('click', customHandler);

function customHandler () {
   custom.classList.toggle('active');
}