const translations = {
    en: {
        welcome: "Welcome to Our Manicure Services",
        services: "Our Services",
        servicesDescription: "We offer a variety of manicure services to suit your needs.",
        masterTitle: "Information about the Master",
        masterName: "Master's Name",
        masterDescription: "A master with many years of experience in the field of manicure. Specializes in classic and gel manicure, as well as nail art.",
        galleryTitle: "Gallery of Works",
        contactTitle: "Contact Us",
        footer: "&copy; 2023 Manicure Services. All rights reserved."
    },
    uk: {
        welcome: "Ласкаво просимо до наших манікюрних послуг",
        services: "Наші послуги",
        servicesDescription: "Ми пропонуємо різноманітні манікюрні послуги, щоб задовольнити ваші потреби.",
        masterTitle: "Інформація про майстра",
        masterName: "Ім'я Майстра",
        masterDescription: "Майстер з багаторічним досвідом у сфері манікюру. Спеціалізується на класичному та гелевому манікюрі, а також на нейл-арті.",
        galleryTitle: "Галерея робіт",
        contactTitle: "Зв'яжіться з нами",
        footer: "&copy; 2023 Манікюрні послуги. Всі права захищені."
    }
};

function translate(language) {
    document.getElementById('welcome').innerText = translations[language].welcome;
    document.getElementById('services-title').innerText = translations[language].services;
    document.getElementById('services-description').innerText = translations[language].servicesDescription;
    document.getElementById('master-title').innerText = translations[language].masterTitle;
    document.getElementById('master-name').innerText = translations[language].masterName;
    document.getElementById('master-description').innerText = translations[language].masterDescription;
    document.getElementById('gallery-title').innerText = translations[language].galleryTitle;
    document.getElementById('contact-title').innerText = translations[language].contactTitle;
    document.getElementById('footer-text').innerHTML = translations[language].footer;
}

$(document).ready(function(){
    $('.gallery-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Testimonials Carousel
    $('.testimonials-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

// Dark Theme Toggle
function toggleDarkTheme() {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

// Progress Bar
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Float Contact Button
document.querySelector('.float-contact').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});