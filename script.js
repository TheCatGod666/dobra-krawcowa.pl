// Language Translations
const translations = {
    pl: {
        tagline: "Rodzinny zakład krawiecki z tradycją od 2024 roku",
        nav_about: "O Nas",
        nav_services: "Usługi",
        nav_locations: "Lokalizacje",
        nav_contact: "Kontakt",
        about_title: "Nasza Historia",
        about_p1: "Dobra Krawcowa to rodzinny zakład krawiecki z wieloletnią tradycją, gdzie każdy ścieg opowiada historię, a każdy projekt jest tworzony z pasją i precyzją.",
        about_p2: "Specjalizujemy się w indywidualnym podejściu do każdego klienta. Wierzymy, że odzież powinna nie tylko pasować do sylwetki, ale także odzwierciedlać charakter i osobowość.",
        about_p3: "Naszą misją jest tworzenie ubrań, które dodają pewności siebie i komfortu. Od drobnych napraw po kompleksowe projekty - każde zadanie wykonujemy z równą starannością.",
        about_p4: "Z miłości do zwierząt projektujemy również wyjątkowe ubranka dla czworonożnych przyjaciół, łącząc funkcjonalność z elegancją.",
        services_title: "Co Oferujemy?",
        service_1_title: "Naprawy Krawieckie",
        service_1_desc: "Od drobnych poprawek po kompleksowe renowacje. Przywracamy życie ulubionym elementom garderoby z najwyższą dbałością o detal.",
        service_1_item1: "Poprawki krawieckie",
        service_1_item2: "Naprawa skóry i futra",
        service_1_item3: "Wymiana, naprawa zamków",
        service_1_item4: "Skrócenie, dopasowanie spodni",
        service_1_item5: "Haft, nabijania nap",
        service_1_item6: "Szycie firan, zasłon",
        service_1_item7: "Skracanie i wydłużanie",
        service_1_item8: "Zacienianie i odświeżanie",
        service_1_item9: "Naprawy awaryjne",
        service_2_title: "Szycie na Miarę",
        service_2_desc: "Kreacje stworzone specjalnie dla Ciebie. Od codziennej elegancji po wyjątkowe okazje - każdy projekt jest unikalny i dopracowany w najdrobniejszych szczegółach.",
        service_2_item1: "Suknie i garnitury",
        service_2_item2: "Odzież codzienna",
        service_2_item3: "Korekty gotowych ubrań",
        service_3_title: "Dla Zwierząt",
        service_3_desc: "Stylowe i wygodne ubranka dla Twoich pupili. Łączymy funkcjonalność z modą, dbając o komfort czworonożnych członków rodziny.",
        service_3_item1: "Sweterki i płaszcze",
        service_3_item2: "Kamizelki ochronne",
        service_3_item3: "Stroje okazjonalne",
        locations_title: "Nasze Pracownie",
        locations_intro: "Zapraszamy do naszych dwóch pracowni w Warszawie. Kliknij przyciski, aby zobaczyć dokładną lokalizację w Google Maps.",
        accessibility: "Dostępność:",
        accessibility_desc: "Wejście dostosowane dla niepełnosprawnych",
        parking: "Parking:",
        parking_desc1: "Miejsca postojowe przy ulicy",
        parking_desc2: "Przestrzeń postojowa w okolicy",
        transport: "Komunikacja:",
        transport_desc1: "Kilka przystanków autobusowych w bezpośrednim sąsiedztwie",
        transport_desc2: "Dobrze skomunikowana lokalizacja z dostępem do transportu publicznego",
        view_on_map: "Zobacz na Mapie",
        footer_tagline: "Rodzinny zakład krawiecki z pasją do doskonałości",
        contact_title: "Kontakt",
        hours_title: "Godziny Otwarcia",
        hours_desc1: "Poniedziałek - Piątek: 11:00-19:00",
        hours_desc2: "Sobota: 11:00-15:00",
        media_title: "Nasze Media",
        media_desc: "Śledź nasze prace i inspiracje w mediach społecznościowych",
        copyright1: "© 2024 Dobra Krawcowa. Wszystkie prawa zastrzeżone.",
        copyright2: "Projekt i wykonanie z myślą o naszych klientach."
    },
    en: {
        tagline: "Family tailoring workshop with tradition since 2024",
        nav_about: "About Us",
        nav_services: "Services",
        nav_locations: "Locations",
        nav_contact: "Contact",
        about_title: "Our Story",
        about_p1: "Dobra Krawcowa is a family tailoring workshop with years of tradition, where every stitch tells a story, and every project is created with passion and precision.",
        about_p2: "We specialize in an individual approach to each client. We believe that clothing should not only fit the figure but also reflect character and personality.",
        about_p3: "Our mission is to create clothes that add confidence and comfort. From minor repairs to complex projects - we perform every task with equal care.",
        about_p4: "Out of love for animals, we also design unique clothing for our four-legged friends, combining functionality with elegance.",
        services_title: "What We Offer?",
        service_1_title: "Tailoring Repairs",
        service_1_desc: "From minor adjustments to comprehensive renovations. We restore life to favorite wardrobe items with the utmost attention to detail.",
        service_1_item1: "Tailoring alterations",
        service_1_item2: "Leather and fur repairs",
        service_1_item3: "Zipper replacement and repair",
        service_1_item4: "Shortening, fitting trousers",
        service_1_item5: "Embroidery, patch application",
        service_1_item6: "Sewing curtains, drapes",
        service_1_item7: "Shortening and lengthening",
        service_1_item8: "Shading and refreshing",
        service_1_item9: "Emergency repairs",
        service_2_title: "Custom Tailoring",
        service_2_desc: "Creations made especially for you. From everyday elegance to special occasions - each project is unique and refined in the smallest details.",
        service_2_item1: "Dresses and suits",
        service_2_item2: "Everyday clothing",
        service_2_item3: "Adjustments to ready-made clothes",
        service_3_title: "For Pets",
        service_3_desc: "Stylish and comfortable clothes for your pets. We combine functionality with fashion, taking care of the comfort of four-legged family members.",
        service_3_item1: "Sweaters and coats",
        service_3_item2: "Protective vests",
        service_3_item3: "Occasional outfits",
        locations_title: "Our Workshops",
        locations_intro: "We invite you to our two workshops in Warsaw. Click the buttons to see the exact location on Google Maps.",
        accessibility: "Accessibility:",
        accessibility_desc: "Entrance adapted for people with disabilities",
        parking: "Parking:",
        parking_desc1: "Street parking spaces",
        parking_desc2: "Parking area nearby",
        transport: "Transport:",
        transport_desc1: "Several bus stops in the immediate vicinity",
        transport_desc2: "Well-connected location with access to public transport",
        view_on_map: "View on Map",
        footer_tagline: "Family tailoring workshop with a passion for excellence",
        contact_title: "Contact",
        hours_title: "Opening Hours",
        hours_desc1: "Monday - Friday: 11:00-19:00",
        hours_desc2: "Saturday: 11:00-15:00",
        media_title: "Our Media",
        media_desc: "Follow our work and inspirations on social media",
        copyright1: "© 2024 Dobra Krawcowa. All rights reserved.",
        copyright2: "Design and implementation with our customers in mind."
    },
    uk: {
        tagline: "Сімейна кравецька майстерня з традиціями з 2024 року",
        nav_about: "Про Нас",
        nav_services: "Послуги",
        nav_locations: "Локації",
        nav_contact: "Контакт",
        about_title: "Наша Історія",
        about_p1: "Dobra Krawcowa - це сімейна кравецька майстерня з багаторічною традицією, де кожен стібок розповідає історію, а кожен проект створюється з пристрастю та точністю.",
        about_p2: "Ми спеціалізуємося на індивідуальному підході до кожного клієнта. Ми віримо, що одяг повинен не лише підходити до фігури, але й відображати характер та особистість.",
        about_p3: "Наша місія - створювати одяг, який додає впевненості та комфорту. Від дрібних ремонтів до комплексних проектів - кожне завдання ми виконуємо з однаковою ретельністю.",
        about_p4: "З любові до тварин ми також створюємо унікальний одяг для чотирилапих друзів, поєднуючи функціональність з елегантністю.",
        services_title: "Що Ми Пропонуємо?",
        service_1_title: "Кравецький Ремонт",
        service_1_desc: "Від дрібних коригувань до комплексних реставрацій. Ми повертаємо життя улюбленим елементам гардеробу з найвищою увагою до деталей.",
        service_1_item1: "Кравецькі коригування",
        service_1_item2: "Ремонт шкіри та хутра",
        service_1_item3: "Заміна, ремонт блискавок",
        service_1_item4: "Вкорочення, припасування штанів",
        service_1_item5: "Вишивка, нанесення нашивок",
        service_1_item6: "Шиття фіранок, портьєр",
        service_1_item7: "Вкорочення та подовження",
        service_1_item8: "Затемнення та оновлення",
        service_1_item9: "Терміновий ремонт",
        service_2_title: "Пошиття на Замовлення",
        service_2_desc: "Креації, створені спеціально для вас. Від повсякденної елегантності до особливих випадків - кожен проект є унікальним і відшліфованим у найменших деталях.",
        service_2_item1: "Суконьки та костюми",
        service_2_item2: "Повсякденний одяг",
        service_2_item3: "Корекція готового одягу",
        service_3_title: "Для Тварин",
        service_3_desc: "Стильний та комфортний одяг для ваших улюбленців. Ми поєднуємо функціональність з модою, дбаючи про комфорт чотирилапих членів родини.",
        service_3_item1: "Светри та пальта",
        service_3_item2: "Захисні жилети",
        service_3_item3: "Святочні костюми",
        locations_title: "Наші Майстерні",
        locations_intro: "Запрошуємо до наших двох майстерень у Варшаві. Натисніть кнопки, щоб побачити точне розташування на Google Maps.",
        accessibility: "Доступність:",
        accessibility_desc: "Вхід пристосований для людей з обмеженими можливостями",
        parking: "Парковка:",
        parking_desc1: "Місця для паркування на вулиці",
        parking_desc2: "Простір для паркування поблизу",
        transport: "Транспорт:",
        transport_desc1: "Кілька автобусних зупинок у безпосередній близькості",
        transport_desc2: "Добре зв'язане місце з доступом до громадського транспорту",
        view_on_map: "Подивитися на Карті",
        footer_tagline: "Сімейна кравецька майстерня з пристрастю до досконалості",
        contact_title: "Контакт",
        hours_title: "Години Роботи",
        hours_desc1: "Понеділок - П'ятниця: 11:00-19:00",
        hours_desc2: "Субота: 11:00-15:00",
        media_title: "Наші Медіа",
        media_desc: "Слідкуйте за нашими роботами та натхненням у соціальних мережах",
        copyright1: "© 2024 Dobra Krawcowa. Всі права захищені.",
        copyright2: "Дизайн та виконання з урахуванням наших клієнтів."
    }
};

// Language Switcher Functionality
const langButtons = document.querySelectorAll('.lang-btn');
const htmlElement = document.documentElement;

// Check for saved language or browser preference
function getPreferredLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = browserLang.split('-')[0];
    
    if (translations[shortLang]) {
        return shortLang;
    }
    
    return 'pl'; // Default to Polish
}

// Set language
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    // Update HTML lang attribute
    htmlElement.setAttribute('lang', lang);
    
    // Update active button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else if (element.hasAttribute('data-html')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Save to localStorage
    localStorage.setItem('language', lang);
}

// Initialize language
setLanguage(getPreferredLanguage());

// Event listeners for language buttons
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme or system preference
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Set theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Initialize theme
setTheme(getPreferredTheme());

// Event listener for theme toggle
themeToggle.addEventListener('click', toggleTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
