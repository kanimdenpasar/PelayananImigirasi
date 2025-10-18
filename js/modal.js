function openComplaintModal() {
  const modal = document.getElementById("complaintModal")
  modal.style.display = "block"
  document.body.classList.add("modal-open")
}

function closeComplaintModal() {
  const modal = document.getElementById("complaintModal")
  modal.style.display = "none"
  document.body.classList.remove("modal-open")
}

function openFormatModal() {
  const modal = document.getElementById("formatModal")
  modal.style.display = "block"
  document.body.classList.add("modal-open")
}

function closeFormatModal() {
  const modal = document.getElementById("formatModal")
  modal.style.display = "none"
  document.body.classList.remove("modal-open")
}

// Close modal when clicking outside of it
window.onclick = (event) => {
  const complaintModal = document.getElementById("complaintModal")
  const formatModal = document.getElementById("formatModal")

  if (event.target === complaintModal) {
    complaintModal.style.display = "none"
    document.body.classList.remove("modal-open")
  }
  if (event.target === formatModal) {
    formatModal.style.display = "none"
    document.body.classList.remove("modal-open")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("complaintForm")
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("complaint-name").value
      const email = document.getElementById("complaint-email").value
      const phone = document.getElementById("complaint-phone").value
      const subject = document.getElementById("complaint-subject").value
      const message = document.getElementById("complaint-message").value

      // Get current language from localStorage
      const currentLang = localStorage.getItem('language') || 'id'
      
      // Create message based on language
      let whatsappMessage = ''
      if (currentLang === 'id') {
        whatsappMessage = `Halo, saya ingin melaporkan pengaduan ke Kantor Imigrasi Kelas I TPI Denpasar (SATGAS PATROLI IMIGRASI).\n\n*FORMAT LAPORAN PENGADUAN*\n\nNama: ${name}\nEmail: ${email}\nNomor Telepon: ${phone}\nSubjek: ${subject}\n\nIsi Pengaduan:\n${message}`
      } else {
        whatsappMessage = `Hello, I would like to report a complaint to the Immigration Office Class I TPI Denpasar (SATGAS PATROLI IMIGRASI).\n\n*COMPLAINT REPORT FORMAT*\n\nName: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nSubject: ${subject}\n\nComplaint Details:\n${message}`
      }

      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappNumber = WHATSAPP_CONFIG.complaint.number
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

      // Send to WhatsApp
      window.open(whatsappUrl, "_blank")

      // Reset form and close modal
      form.reset()
      closeComplaintModal()
    })
  }
})
