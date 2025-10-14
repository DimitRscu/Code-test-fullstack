Fungsionalitas & Implementasi
Proyek ini mengimplementasikan arsitektur Fullstack yang memisahkan logika server dan antarmuka pengguna.

Fitur Utama
Chatbot Interaktif: Menggunakan model Large Language Model (LLM) untuk memberikan respons cerdas secara real-time.

Fully Responsive: Tampilan dioptimalkan untuk perangkat desktop dan mobile.

Clean UI: Antarmuka pengguna yang bersih dan fokus pada fungsi utama.

Solusi Cerdas (Problem-Solving)
Awalnya proyek diimplementasikan menggunakan OpenAI, namun ditemukan kendala insufficient quota. Untuk menjamin fungsionalitas dan stabilitas proyek, API diganti (migrasi) ke Google Gemini API. Ini memastikan proyek berjalan stabil dan menunjukkan kemampuan untuk beradaptasi cepat dalam mencari solusi teknis.

Tech Stack & Persyaratan
Komponen

Teknologi yang Digunakan

Persyaratan HR

Backend

Express.js, TypeScript, Node.js

Minimal 1 Endpoint API & Error Handling

Frontend

React.js, TypeScript, Axios

Mengirim Input & Menampilkan Respons

AI/LLM

Google Gemini API (Model: gemini-2.5-flash)

Integrasi AI/LLM

Best Practice

Struktur Jelas, Kode TypeScript

Kode Bersih & Terstruktur

⚙️ Cara Menjalankan Aplikasi (Lokal)
Aplikasi ini membutuhkan dua server yang berjalan secara bersamaan: Backend (Port 5000) dan Frontend (Port 3000).

Langkah 1: Persiapan Kunci API
Dapatkan kunci API Gemini Anda dari Google AI Studio.

Buat file .env di folder backend/.

Isi file .env dengan format berikut:

GEMINI_API_KEY=AIzaSyCBEWseLL6qqQAip5xSwsppV2ErKC8tyFI

Langkah 2: Menjalankan Backend (Server AI - Port 5000)
Buka Terminal pertama di folder backend/.

Instal dependensi (jika ini dijalankan di komputer baru):

npm install

Jalankan server backend:

npx ts-node src/index.ts

(Terminal harus menampilkan: Server Gemini berjalan di http://localhost:5000)

Langkah 3: Menjalankan Frontend (Aplikasi Web - Port 3000)
Buka Terminal kedua (sambil backend berjalan) di folder frontend/.

Instal dependensi (jika ini dijalankan di komputer baru):

npm install

Jalankan aplikasi React:

npm start

(Aplikasi akan terbuka otomatis di browser pada http://localhost:3000)

Struktur Proyek
glints-project/

backend/
    ─ .env          # Kunci API (Disembunyikan di GitHub)
    ─ src/
      ─ index.ts  # Express Server & Logika Gemini
      ─ package.json
frontend/
    ─ src/
      ─ App.tsx   # Komponen React Utama (Logic UI)
      ─ index.css # Gaya Tampilan (Clean UI)
    ─ README.md
