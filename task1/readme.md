# 📘 Pengenalan JavaScript & TypeScript – Sesi 1

Berikut ini adalah penjelasan dari hasil pengerjaan tugas pengenalan JavaScript & TypeScript. Selain ini saya juga membuat artikel di medium terkait dua bahasa pemrograman bertikut, jika kalian tertarik bisa membaca nya pada link berikut: [Mengenal JavaScript dan TypeScript](https://medium.com/@adit.praditia/mengenal-javascript-dan-typescript-mana-yang-harus-anda-pilih-f2528b152116)

## 📂 Struktur Folder

```
task1/
│
├── js/
│ └── fileName.js
│
├── ts/
│ └── fileName.ts
│
└── README.md
```

## 🧠 Deskripsi Soal dan Pengerjaan

### 1. ✅ Menghitung Luas Persegi Panjang

-   **Input**: Panjang dan lebar (number)
-   **Proses**: Luas = panjang × lebar
-   **Output**: Hasil perkalian
-   **Contoh**: `areaRectangle(5, 3) // Output: 15`

### 2. ✅ Menghitung Diameter, Keliling, dan Luas Lingkaran

-   **Input**: Jari-jari (number)
-   **Proses**:
    -   Diameter = 2 × radius
    -   Keliling = 2 × π × radius
    -   Luas = π × radius²
-   **Output**: Objek dengan 3 properti (`diameter`, `circumference`, `area`)
-   **Contoh**: `circleMetrics(5)`

### 3. ✅ Mencari Sudut Ketiga Segitiga

-   **Input**: Dua sudut segitiga (number)
-   **Proses**: Sudut ketiga = 180 - (sudut pertama + sudut kedua)
-   **Output**: Nilai sudut ketiga
-   **Contoh**: `findThirdAngle(80, 65) // Output: 35`

### 4. ✅ Menghitung Selisih Hari Antara Dua Tanggal

-   **Input**: Dua string tanggal dalam format YYYY-MM-DD
-   **Proses**: Hitung selisih waktu dalam milidetik, lalu konversi ke hari
-   **Output**: Selisih hari (number)
-   **Contoh**: `dateDifference(""2025-05-7", "2025-05-9"") // Output: 2`

### 5. ✅ Mengambil Inisial Nama dalam Huruf Kapital

-   **Input**: Nama lengkap (string)
-   **Proses**: Pisah string dengan spasi, ambil huruf pertama tiap kata, ubah ke kapital
-   **Output**: Inisial kapital (string)
-   **Contoh**: `getInitialsName("Adit Praditia") // Output: AP`

## 🚀 Cara Menjalankan

### JavaScript

```bash
cd js
node fileName.js
```

### TypeScript

```bash
cd ts
tsc fileName.ts
node fileName.js
```

pastikan di local komputer anda sudah terinstall `typescript npm install -g typescript`

### Thank You and Happy Coding 🖥️
