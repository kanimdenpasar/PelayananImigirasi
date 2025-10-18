// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const nav = document.getElementById("nav")

  if (!hamburger || !nav) {
    console.error("Hamburger or nav element not found")
    return
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    nav.classList.toggle("active")
  })

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll(".nav a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      hamburger.classList.remove("active")
      nav.classList.remove("active")

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" })
      }
    })
  })
})
