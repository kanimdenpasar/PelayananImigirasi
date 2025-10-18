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

      const whatsappMessage = `Halo, saya ingin melaporkan pengaduan ke Kantor Imigrasi Kelas I Denpasar.\n\nHello, I would like to report a complaint to the Immigration Office Class I Denpasar.\n\n*FORMAT LAPORAN PENGADUAN / COMPLAINT REPORT FORMAT*\n\nNama / Name: ${name}\nEmail: ${email}\nNomor Telepon / Phone Number: ${phone}\nSubjek / Subject: ${subject}\n\nIsi Pengaduan / Complaint Details:\n${message}`

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
