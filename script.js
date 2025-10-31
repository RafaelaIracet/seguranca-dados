// Theme Toggle
const themeToggle = document.getElementById("theme-toggle")
const html = document.documentElement

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
html.setAttribute("data-theme", currentTheme)

themeToggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme")
  const newTheme = theme === "light" ? "dark" : "light"

  html.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
})

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector(".nav-menu")

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")

  // Animate hamburger menu
  const spans = menuToggle.querySelectorAll("span")
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translateY(8px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translateY(-8px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    const spans = menuToggle.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible")
  } else {
    backToTopButton.classList.remove("visible")
  }
})

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards and sections
const animatedElements = document.querySelectorAll(".card, .concept-item, .news-card, .practice-category")
animatedElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Header scroll effect
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.transform = "translateY(-100%)"
  } else {
    header.style.transform = "translateY(0)"
  }

  lastScroll = currentScroll
})

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll("section[id]")

function highlightNavigation() {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)

    if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.style.color = "var(--primary)"
    } else if (navLink) {
      navLink.style.color = "var(--text-secondary)"
    }
  })
}

window.addEventListener("scroll", highlightNavigation)

// Console message for developers
console.log("%c🔒 SecureData", "font-size: 24px; font-weight: bold; color: #2563eb;")
console.log("%cProtegendo dados, educando pessoas.", "font-size: 14px; color: #64748b;")
console.log("%cSite desenvolvido com HTML, CSS e JavaScript puro.", "font-size: 12px; color: #94a3b8;")
