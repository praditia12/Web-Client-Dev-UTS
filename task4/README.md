# 📝 React + Tailwind Personal Page

Project ini merupakan tugas dari mata kuliah Web Client Development, di mana ini adalah tugas pengenalan React + Tailwind yang mengimplementasikan tampilan **HomePage** dan **Contact Page** berdasarkan desain yang sudah disediakan.

Saya juga tidak hanya implementasi React + Tailwind, tetapi saya juga membuat sebuah artikel, dimana saya membahas sedikit tentang tailwind mulai dari sejarah singkat hingga bagaimana sekarang Tailwind bisa menjadi pilihan banyak developer, jika anda tertarik membacanya bisa dilihat disini: [Mengenal Tailwind: CSS Framework yang paling banyak digunakan](https://medium.com/@adit.praditia/mengapa-tailwind-css-menjadi-game-changer-untuk-pengembangan-ui-modern-45a71b59e461)

## 🎯 Tujuan Pengerjaan

Tujuan utama dari project ini adalah sebagai berikut:

-   Dasar-dasar penggunaan **React** dengan **tailwind**
-   Struktur komponen di React
-   Routing antar halaman
-   Praktik penggunaan Git dalam pengembangan

## 🛠️ Tools & Teknologi

-   **React** + **Tailwind** (Vite)
-   **Tailwind**
-   **Git** untuk version control
-   **Figma** sebagai acuan desain UI

## ⚙️ Langkah Pengerjaan

1. **Setup Project**

    - Pertama disini membuat project React dengan Vite:
        ```bash
        npm create vite@latest
        ```
    - Lalu memilih `react-js` untuk template awal.

2. **Struktur Folder**

    - Saya membuat struktur seperti berikut agar komponen lebih rapi dan reusable.
        ```
        src/
        ├── components/
        ├── pages/
        ├── assets/
        └── App.tsx
        ```

3. **Routing**

    - Menggunakan `react-router-dom` untuk mengatur navigasi antara halaman `HomePage` dan `ContactPage`.

4. **Komponen**

    - Berikutnya memecah beberapa komponen seperti `Navbar`, `Hero`, `ContactForm`, `Footer`, dll.
    - Setiap komponen dibuat sebagai file `.jsx` dan diberi styling menggunakan Tailwind sebagai CSS Framework.

5. **Implementasi Desain**
    - Pada tahap ini saya melakukan slicing dengan referensi desain yang sudah diberikan sebelumnya.
    - Gambar dan aset yang dibutuhkan saya masukan ke folder `public/assets`.

## 🚀 Menjalankan Project

1. Clone repo ini:

    ```bash
    git clone <url repo>
    cd <folder name>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Jalankan:
    ```bash
    npm run dev
    ```

### Thank You and Happy Coding 🚀🖥️
