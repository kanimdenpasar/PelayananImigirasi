const WHATSAPP_CONFIG = {
  satgas: {
    number: "6281234567890", // Replace with actual Satgas Patroli number
    message: "Halo, saya ingin menghubungi Satgas Patroli Imigrasi Denpasar.",
  },
  pengaduan: {
    number: "6281234567891", // Replace with actual Layanan Pengaduan number
    message:
      "Halo, saya ingin melaporkan pengaduan ke Kantor Imigrasi Kelas I Denpasar. Berikut adalah format laporan pengaduan saya:\n\nNama: [Nama Lengkap]\nEmail: [Email]\nNomor Telepon: [Nomor]\nSubjek: [Subjek Pengaduan]\nIsi Pengaduan: [Isi Pengaduan]",
  },
  complaint: {
    number: "6285794242709", // Nomor untuk form pengaduan
  },
}

function openWhatsApp(type) {
  const config = WHATSAPP_CONFIG[type]

  const encodedMessage = encodeURIComponent(config.message)
  const whatsappUrl = `https://wa.me/${config.number}?text=${encodedMessage}`

  window.open(whatsappUrl, "_blank")
}
