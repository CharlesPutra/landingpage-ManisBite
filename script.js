function kirimWhatsApp() {
    const nama = document.getElementById('nama').value;
    const wa = document.getElementById('wa').value;
    const pesanan = document.getElementById('pesanan').value;
    const admin = "6282337631513"; // ← Ganti dengan nomor asli kamu
    const text = `Halo Admin ManisBite! Saya ${nama} ingin memesan:\n${pesanan}\nNomor saya: ${wa}`;
    window.open(`https://wa.me/${admin}?text=${encodeURIComponent(text)}`, '_blank');
}