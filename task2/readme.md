# 📌 Laporan Implementasi Kode - Sesi 2

Berikut ini adalah penjelasan dari kumpulan fungsi sederhana yang ditulis dalam **JavaScript** dan **TypeScript**, sesuai dengan instruksi tugas. Fungsi-fungsi ini mencakup konversi suhu, satuan panjang, pengecekan bilangan ganjil, manipulasi string, dan pengecekan palindrome. Selain code implementasi ini, saya juga ada membuat artikel medium terkait **Control Version System**, jika anda tertarik berikut link nya: [Control Version System: Git](https://medium.com/@adit.praditia/menguasai-git-strategi-efektif-untuk-pengelolaan-kode-80edc777783e)

## 📁 Struktur Folder

```
├── js/
│ ├── convertFahrenheit.js
│ ├── convertCmToKm.js
│ ├── isOdd.js
│ ├── removeFirstOccurrence.js
│ ├── isPalindrome.js
│ └── main.js
├── ts/
│ ├── convertFahrenheit.ts
│ ├── convertCmToKm.ts
│ ├── isOdd.ts
│ ├── removeFirstOccurrence.ts
│ ├── isPalindrome.ts
│ └── main.ts
└── README.md
```

## 🧠 Daftar Function

### 1. Konversi Fahrenheit ke Celsius

-   **Deskripsi**: Mengubah suhu dari Fahrenheit ke Celsius.
-   **Contoh**: `convertFahrenheit(100)` → `37.78`

### 2. Konversi Centimeter ke Kilometer

-   **Deskripsi**: Mengubah satuan panjang dari centimeter ke kilometer.
-   **Contoh**: `convertCmToKm(100000)` → `"1 km"`

### 3. Cek Bilangan Ganjil

-   **Deskripsi**: Mengembalikan `true` jika bilangan ganjil, dan `false` jika genap.
-   **Contoh**: `isOdd(1001)` → `true`

### 4. Hapus Kemunculan Pertama Substring

-   **Deskripsi**: Menghapus kemunculan pertama substring dalam sebuah string.
-   **Contoh**: `removeFirstOccurrence("Hello world", "ell")` → `"Ho world"`

### 5. Cek Palindrome

-   **Deskripsi**: Memeriksa apakah sebuah string merupakan palindrome (dibaca sama dari depan dan belakang).
-   **Contoh**: `isPalindrome("madam")` → `true`

## ▶️ Cara Menjalankan

### JavaScript

```bash
cd js
node main.js
```

### TypeScript

```bash
cd js
tsc main.ts
node main.js
```

### 📌 Catatan

File main.js dan main.ts menunjukkan contoh penggunaan semua fungsi.

### Thank You and Happy Coding 🖥️
