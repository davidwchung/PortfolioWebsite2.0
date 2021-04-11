let landingText = document.getElementById('landing-text')

window.addEventListener('scroll', function() {
    let value = window.scrollY
    landingText.style.marginBottom = value * 2 + 'px';
})

function menuToggle() {
    const toggleMenu = document.querySelector('.toggle')
    const glass = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    glass.classList.toggle('active');
}

VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});