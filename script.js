const navDialouge = document.getElementById("nav-dialouge");
function handelMenue() {
  navDialouge.classList.toggle("hidden");
}


document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default jump

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    const targetPosition = targetElement.offsetTop - 50; // Adjust for navbar height
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 500; // Adjust this value to control speed (lower = faster)
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollAmount = easeInOutQuad(
        timeElapsed,
        startPosition,
        distance,
        duration
      );
      window.scrollTo(0, scrollAmount);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  });
});


 // Add active class when scrolling
    window.addEventListener('scroll', () => {
      let scrollPosition = window.scrollY;

      document.querySelectorAll('section').forEach(section => {
        let sectionTop = section.offsetTop - 100;
        let sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          document.querySelector(`.nav-link[href="#${section.id}"]`).classList.add('active');
        }
      });
    });

