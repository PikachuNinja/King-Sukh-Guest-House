
const hero = document.querySelector('.hero-overlay');
window.addEventListener('mousemove', e => {
    let x = (window.innerWidth/2 - e.pageX)/50;
    let y = (window.innerHeight/2 - e.pageY)/50;
    hero.style.transform = `translate(-50%, -50%) rotateY(${x}deg) rotateX(${y}deg)`;
});
window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    hero.style.transform += ` translateY(${offset*0.2}px)`;
});


window.addEventListener('resize', updateCarousel);
const wrapper = document.querySelector('.carousel-wrapper');
const cards = document.querySelectorAll('.carousel-card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.remove('active', 'prev', 'next');

    if(index === current) card.classList.add('active');
    else if(index === (current - 1 + cards.length) % cards.length) card.classList.add('prev');
    else if(index === (current + 1) % cards.length) card.classList.add('next');
  });

  // Center the active card
  const offset = -(current * (cards[0].offsetWidth + 20) - wrapper.offsetWidth/2 + cards[0].offsetWidth/2);
  wrapper.style.transform = `translateX(${offset}px)`;
}

prev.addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  updateCarousel();
});

next.addEventListener('click', () => {
  current = (current + 1) % cards.length;
  updateCarousel();
});


updateCarousel();

const pins = document.querySelectorAll('.location-pin');
const infoBubble = document.getElementById('info-bubble');

pins.forEach(pin => {
  pin.addEventListener('click', () => {
    const info = pin.getAttribute('data-info');
    infoBubble.innerText = info;
    infoBubble.style.display = 'block';
  });
});


// Booking Form Mailto
document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();
    const form = e.target;
    const name = encodeURIComponent(form[0].value);
    const phone = encodeURIComponent(form[1].value);
    const message = encodeURIComponent(form[2].value);
    const mailto = `mailto:kkghosh0099@gmail.com?subject=Booking request - King Sukh Guest House&body=Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    window.location.href = mailto;
    alert('Booking request sent. Please check your email client.');
});
