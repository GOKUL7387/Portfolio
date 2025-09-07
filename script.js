const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      showMessage("✅ Message sent successfully!", "success");
    } else {
      showMessage("❌ Oops! Something went wrong.", "error");
    }
  } catch (err) {
    showMessage("❌ Failed to send message.", "error");
  }
});

function showMessage(text, type) {
  msg.textContent = text;
  msg.className = `form-success-msg ${type}`;

  // 🕒 Clear after 3 seconds
  setTimeout(() => {
    msg.textContent = "";
    msg.className = "form-success-msg";
  }, 3000);
}

 // Mobile menu toggle
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '<i class="fas fa-bars"></i>';
document.body.appendChild(hamburger);

const nav = document.querySelector('.bottom-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close menu when clicking on a nav item
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  });
});


  /*Scrolling script*/
  ScrollReveal().reveal('.intro, .about, .skills, .projects, .achievements, .education, .certifications, .contact-section', {
    distance: '20px',
    duration: 1800,
    easing: 'ease-in-out',
    opacity: 0,
    reset: true,  // this allows animation when scrolling back up
    origin: 'bottom' // animate from bottom
  }); 