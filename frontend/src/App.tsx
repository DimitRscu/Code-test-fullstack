import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string>('Halo! Saya Asisten AI Anda. Apa yang bisa saya bantu?');
  // Loading menunggu jawaban dari Ai
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fungsi dipanggil menekan tombol kirim
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  // Pesan koosong jangan melakukan apa-apa
    if (!message.trim()) return;

    setIsLoading(true);
    setAiResponse(''); 

    try {
      //Mengirim pesan ke endpoint backend
      const response = await axios.post('http://localhost:5000/api/chat', { message });
      
      // Mengambil data respons dari backend
      setAiResponse(response.data.data);
      setMessage(''); // Mengosongkan input setelah pesan terkirim

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