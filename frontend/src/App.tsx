import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Menggunakan gaya dari App.css

function App() {
  // State untuk menyimpan pesan yang diketik pengguna
  const [message, setMessage] = useState<string>('');
  // State untuk menyimpan respons yang diterima dari AI
  const [aiResponse, setAiResponse] = useState<string>('Halo! Saya Asisten AI Anda. Apa yang bisa saya bantu?');
  // State untuk menunjukkan status loading (saat menunggu jawaban AI)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fungsi yang dipanggil saat tombol 'Kirim' ditekan
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Jika pesan kosong atau hanya spasi, jangan lakukan apa-apa
    if (!message.trim()) return;

    setIsLoading(true);
    setAiResponse(''); // Kosongkan respons sebelumnya

    try {
      // Mengirim pesan ke endpoint backend yang sudah kita buat (http://localhost:5000/api/chat)
      const response = await axios.post('http://localhost:5000/api/chat', { message });
      
      // Mengambil data respons dari backend
      setAiResponse(response.data.data);
      setMessage(''); // Kosongkan input setelah pesan terkirim

    } catch (error) {
      console.error('Error saat mengirim pesan:', error);
      // Penanganan error jika komunikasi gagal
      setAiResponse('Maaf, terjadi kesalahan saat berkomunikasi dengan AI. Pastikan server backend berjalan.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Asisten Chatbot AI 🤖</h1>
        <p className="subtitle">Didukung oleh Gemini AI</p>
      </header>
      <main>
        <div className="chat-container">
          <div className="ai-response-text">
            {/* Tampilkan pesan loading atau respons AI */}
            {isLoading ? (
              <p className="loading-message">AI sedang berpikir...</p>
            ) : (
              <p>{aiResponse}</p>
            )}
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ketik pertanyaan anda di sini..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Mengirim...' : 'Kirim'}
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;