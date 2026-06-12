let burgerBtn = document.querySelector('.burger-btn');
let navPanel = document.querySelector('header ul');
let shadowFill = document.querySelector('.shadow-fill')

burgerBtn.addEventListener('click', () => {

    navPanel.classList.toggle('open');
    shadowFill.classList.toggle('shadow-fill-active');

});

shadowFill.addEventListener('click', () => {

    navPanel.classList.toggle('open');
    shadowFill.classList.toggle('shadow-fill-active');

});