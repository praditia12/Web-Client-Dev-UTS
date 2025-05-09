# 🧾 Implementasi React Context dan Local Storage - Web Pokémon

## 📌 Deskripsi Singkat

Proyek ini merupakan aplikasi katalog Pokémon yang dikembangkan menggunakan React. Fitur utama meliputi pencarian, pengurutan, pengubahan tampilan (grid/list), dan penyimpanan preferensi pengguna menggunakan **React Context** dan **Local Storage**.

Selain mengimplementasikan React Context dan Local Storage, Saya juga telah menulis artikel tentang **React State Management**, jika anda tertarik bisa membaca nya disini: [Memahami React State Management](https://medium.com/@adit.praditia/react-state-management-memahami-pondasi-sebelum-melangkah-lebih-jauh-cd1ffa96eb20)

---

## ✅ Tujuan Pengerjaan

1. Mengelola state global menggunakan `React Context`.
2. Menerapkan `useContext` pada komponen yang membutuhkan akses ke state global.
3. Menyimpan dan memuat ulang data dari **localStorage** agar preferensi pengguna tetap tersimpan walau halaman di-refresh.
4. Menyusun komponen dengan pendekatan modular dan reusable.

---

## 🗂️ Struktur Utama

```
src/
├── components/
│   ├── Navbar/
│   ├── SortView/
|   |── ListCard/
│   └── ListCard/
├── context/
│   └── PokemonContext.js
├── data/
│   └── pokemonData.js
├── pages/
|   |── DetailPage/
│   └── HomePage/
└── App.js
```

---

## 🧠 Implementasi React Context

`PokemonContext` menyimpan dan mengelola state berikut:

-   `searchTerm` → Kata kunci pencarian Pokémon.
-   `sortOption` → Opsi pengurutan (ID ASC, ID DESC, Nama ASC, Nama DESC).
-   `viewMode` → Mode tampilan (grid atau list).
-   (opsional) `filterType`, `filterHP` → Filter tambahan yang sudah disiapkan.

Komponen yang menggunakan context:

-   `Navbar`: Mengakses `searchTerm` dan `setSearchTerm`
-   `SortView`: Mengakses dan mengubah `sortOption` & `viewMode`
-   `HomePage`: Menyusun list Pokémon berdasarkan state global

---

## 💾 Implementasi Local Storage

Menggunakan `useEffect` untuk setiap state agar nilai yang diubah akan tersimpan ke localStorage. Saat halaman di-refresh, nilai default akan diambil dari localStorage jika tersedia.

Contoh:

```jsx
useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
}, [searchTerm]);
```

---

## 📚 Teknologi yang Digunakan

-   **React** (Vite)
-   **JavaScript (ES6+)**
-   **Tailwind CSS**
-   **React Context**
-   **Browser Local Storage**

---

## 📦 Cara Menjalankan

1. Clone repository:
    ```bash
    git clone <repo-url>
    cd <folder-project>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Jalankan proyek:
    ```bash
    npm run dev
    ```
