// Menggunakan library Google GenAI
import express, { Request, Response } from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai'; // IMPORT INI MENGGANTIKAN OpenAI
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

// Konfigurasi CORS
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST',
}));

app.use(express.json());

// Inisialisasi GoogleGenAI dengan kunci API dari .env
const ai = new GoogleGenAI({ // Menggunakan 'ai' sebagai variabel, bukan 'openai'
    apiKey: process.env.GEMINI_API_KEY, // Menggunakan GEMINI_API_KEY
});

// Endpoint API untuk chat
app.post('/api/chat', async (req: Request, res: Response) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Pesan tidak boleh kosong.' });
        }

        // Panggil Gemini API
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash", // Menggunakan model Gemini
            contents: [{ role: "user", parts: [{ text: message }] }],
        });

        // Tanggapan dari AI
        const aiResponse = response.text;

        res.status(200).json({ data: aiResponse });

    } catch (error) {
        // Tampilkan error spesifik di terminal backend untuk debugging
        console.error('Error saat memanggil API Gemini:', error);
        // Kirim error generik ke frontend
        res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
});

app.listen(port, () => {
    console.log(`Server Gemini berjalan di http://localhost:${port}`);
});
