// Membuat objek 'mobil' dengan field dan method
let mobil = {
    warna: "merah",
    merek: "Toyota",
    kecepatan: 100,
    
    // Method atau aksi
    jalan: function() {
        console.log("Mobil sedang berjalan dengan kecepatan " + this.kecepatan + " km/jam.");
    },
    berhenti: function() {
        console.log("Mobil telah berhenti.");
    }
};

// Menggunakan field dari objek 'mobil'
console.log(mobil); // output memberikan keseluruhan object
console.log("Warna mobil: " + mobil.warna);        // Output Warna mobil: merah
console.log("Merek mobil: " + mobil.merek);        // Output Merek mobil: Toyota

// Menggunakan method dari objek 'mobil'
mobil.jalan();      // Output Mobil sedang berjalan dengan kecepatan 100 km/jam.
mobil.berhenti();   // Output Mobil telah berhenti.
