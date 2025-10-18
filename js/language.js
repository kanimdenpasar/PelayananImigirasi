// Language translations
const translations = {
  id: {
    "nav-home": "Beranda",
    "nav-services": "Layanan",
    "nav-contact": "Kontak",
    "hero-title": "Selamat Datang di Kantor Imigrasi Kelas I TPI Denpasar (SATGAS PATROLI IMIGRASI)",
    "hero-subtitle": "Layanan Imigrasi Terpadu untuk Masyarakat Bali",
    "contact-title": "Hubungi Kami",
    "btn-satgas": "WA Satgas Patroli Imigrasi",
    "btn-format": "Format Laporan Pengaduan",
    "procedure-title": "Tata Cara Pengaduan",
    "step1-title": "Persiapan",
    "step1-desc": "Siapkan data dan informasi lengkap tentang pengaduan Anda",
    "step2-title": "Isi Format",
    "step2-desc": "Isi format laporan pengaduan dengan detail yang jelas",
    "step3-title": "Kirim",
    "step3-desc": "Kirim laporan melalui WhatsApp ke nomor yang tersedia",
    "step4-title": "Verifikasi",
    "step4-desc": "Tim kami akan memverifikasi dan menindaklanjuti pengaduan Anda",
    "location-title": "Lokasi",
    "office-hours-title": "Jam Operasional Kantor Imigrasi",
    "office-hours-desc": "<strong>Senin - Jumat:</strong> 08:00 - 16:00<br><strong>Sabtu - Minggu:</strong> Tutup",
    "satgas-hours-title": "Jam Operasional Satgas Patroli Bali",
    "satgas-hours-desc": "<strong>24 Jam</strong><br>Setiap Hari",
    "office-desc": "Kantor Imigrasi Kelas I Denpasar melayani kebutuhan imigrasi untuk wilayah Bali dengan profesional, transparan, dan akuntabel. Kami berkomitmen memberikan pelayanan terbaik kepada masyarakat.",
    "legal-title": "Peraturan Perundang-undangan",
    "legal-desc": "Berdasarkan UU NO 11 Tahun 2011 tentang Informasi dan Transaksi Elektronik, layanan ini menyediakan informasi resmi dari Kantor Imigrasi Kelas I Denpasar."
  },
  en: {
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-contact": "Contact",
    "hero-title": "Welcome to Immigration Office Class I TPI Denpasar (SATGAS PATROLI IMIGRASI)",
    "hero-subtitle": "Integrated Immigration Services for Bali Community",
    "contact-title": "Contact Us",
    "btn-satgas": "WA Immigration Patrol Task Force",
    "btn-format": "Complaint Report Format",
    "procedure-title": "Complaint Procedure",
    "step1-title": "Preparation",
    "step1-desc": "Prepare complete data and information about your complaint",
    "step2-title": "Fill Format",
    "step2-desc": "Fill in the complaint report format with clear details",
    "step3-title": "Send",
    "step3-desc": "Send the report via WhatsApp to the available number",
    "step4-title": "Verification",
    "step4-desc": "Our team will verify and follow up on your complaint",
    "location-title": "Location",
    "office-hours-title": "Immigration Office Operating Hours",
    "office-hours-desc": "<strong>Monday - Friday:</strong> 08:00 - 16:00<br><strong>Saturday - Sunday:</strong> Closed",
    "satgas-hours-title": "Bali Patrol Task Force Operating Hours",
    "satgas-hours-desc": "<strong>24 Hours</strong><br>Every Day",
    "office-desc": "Immigration Office Class I Denpasar serves immigration needs for the Bali region professionally, transparently, and accountably. We are committed to providing the best service to the community.",
    "legal-title": "Laws and Regulations",
    "legal-desc": "Based on Law NO 11 of 2011 concerning Electronic Information and Transactions, this service provides official information from the Immigration Office Class I Denpasar."
  }
}

// Get current language from localStorage or default to 'id'
let currentLang = localStorage.getItem('language') || 'id'

// Function to change language
function changeLanguage(lang) {
  currentLang = lang
  localStorage.setItem('language', lang)
  
  // Update all elements with data-id
  document.querySelectorAll('[data-id]').forEach(element => {
    const key = element.getAttribute('data-id')
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key]
    }
  })
  
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active')
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active')
    }
  })
  
  // Update HTML lang attribute
  document.documentElement.lang = lang
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  changeLanguage(currentLang)
  
  // Add click event listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang')
      changeLanguage(lang)
    })
  })
})
