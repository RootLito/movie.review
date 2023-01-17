const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');



hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
})

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.remove('active');
        })
        link.classList.add('active');
        menu.classList.remove('active');
    })
})

