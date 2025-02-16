const heart = document.querySelector('.heart');

heart.addEventListener('mouseover', () => {
  heart.style.transform = 'rotate(-45deg) scale(1.2)'; // Увеличиваем сердце
  heart.style.transition = 'transform 0.3s ease'; // Добавляем плавную анимацию
});

heart.addEventListener('mouseout', () => {
  heart.style.transform = 'rotate(-45deg) scale(1)'; // Возвращаем исходный размер
  heart.style.transition = 'transform 0.3s ease'; // Добавляем плавную анимацию
});





