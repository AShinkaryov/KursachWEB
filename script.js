document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let slideInterval;

    function updateSlider(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function startAutoPlay() {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider(currentIndex);
        }, 5000);
    }

    // Клик по точкам
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider(currentIndex);
            // Перезапуск таймера после ручного клика
            clearInterval(slideInterval);
            startAutoPlay();
        });
    });

    // Запуск автоплея при загрузке
    startAutoPlay();
});