words.forEach(word => {
    // ... (código existente)
  
    // Generar un ángulo aleatorio entre -20 y 20 grados
    const randomAngle = Math.random() * 40 - 20;
    word.style.transform = `rotate(${randomAngle}deg)`;
  });


  let scrollContainer = document.querySelector("scroll");
  let backBtn = document.getElementById("backBtn");
  let nextBtn = document.getElementById("nextBtn");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltay;
    
  });


 
  document.addEventListener('DOMContentLoaded', () => {
    const horizontalScroll = document.querySelector('.scroll-container');

    horizontalScroll.addEventListener('mousedown', (e) => {
        horizontalScroll.isDown = true;
        horizontalScroll.startX = e.pageX - horizontalScroll.offsetLeft;
        horizontalScroll.scrollLeftStart = horizontalScroll.scrollLeft;
    });

    horizontalScroll.addEventListener('mouseleave', () => {
        horizontalScroll.isDown = false;
    });

    horizontalScroll.addEventListener('mouseup', () => {
        horizontalScroll.isDown = false;
    });

    horizontalScroll.addEventListener('mousemove', (e) => {
        if (!horizontalScroll.isDown) return;
        e.preventDefault();
        const x = e.pageX - horizontalScroll.offsetLeft;
        const walk = (x - horizontalScroll.startX) * 2; // velocidad de arrastre
        horizontalScroll.scrollLeft = horizontalScroll.scrollLeftStart - walk;
    });
});


