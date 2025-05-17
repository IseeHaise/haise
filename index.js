// HAMBURGERR
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links")
    navLinks.classList.toggle("open")
  }
  
  // FOR CLOSE MENU
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      const navLinks = document.querySelector(".nav-links")
      navLinks.classList.remove("open")
    });
  });
  
  // SCROLLINNGG CHANGING COLOR
  const sections = document.querySelectorAll("section, header")
  const navLi = document.querySelectorAll(".nav-links li a")
  const navbar = document.querySelector(".navbar")
  
  window.addEventListener("scroll", () => {
    let current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id") || "home"
      }
    });
  
    navLi.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") === "#" + current) {
        a.classList.add("active");
      }
    });
  
    // Change navbar background on scroll
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(0, 0, 0, 0.95)"
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.8)"
    }
  });
  
  // FOR CONTACT FORM
  const contactForm = document.getElementById("contactForm")
  
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim()
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.")
      return;
    }
  
   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.")
      return;
    }
  
 
    alert(`Thank you, ${name}! Your message has been received.`)
    contactForm.reset();
  });