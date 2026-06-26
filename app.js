// ============================================
// REKA Landing Page — Logic
// ============================================

function handleCheckout(e) {
  e.preventDefault();
  
  const emailInput = document.getElementById('buyerEmail').value;
  const btn = document.getElementById('btnCheckout');
  
  if (!emailInput) return;
  
  // Ubah state tombol
  btn.innerText = "Memproses...";
  btn.style.opacity = "0.7";
  btn.disabled = true;
  
  // Simulasikan delay untuk efek loading
  setTimeout(() => {
    // Sembunyikan tombol checkout
    btn.style.display = 'none';
    
    // Tampilkan informasi pembayaran
    const paymentInfo = document.getElementById('paymentInfo');
    paymentInfo.style.display = 'block';
    
    // Smooth scroll ke info pembayaran
    paymentInfo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Update link WhatsApp dengan email user
    const waLink = document.getElementById('waLink');
    const baseText = "Halo, saya ingin membeli lisensi REKA Plugin (Rp 25.000/bulan). Email saya: ";
    // Nomor WA Author (Ganti dengan nomor yang benar)
    const waNumber = "6281234567890"; 
    waLink.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(baseText + emailInput)}`;
    
  }, 800);
}

// Interaksi Navbar saat scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10, 22, 40, 0.98)';
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
  } else {
    nav.style.background = 'rgba(10, 22, 40, 0.9)';
    nav.style.boxShadow = 'none';
  }
});
