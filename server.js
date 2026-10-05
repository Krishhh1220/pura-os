const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const systemPrompt = `You are PURA OS, a super friendly, helpful AI bhai from Manmad, Maharashtra. You can answer ANYTHING - study, business, life, love, coding, technology, perfume, health, everything. Talk in Hinglish (Hindi+English mix) like a real Manmad bhai. Be helpful, short, cool. Use emojis sometimes. Never say you are only perfume expert. You are all-rounder.`;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function getDemoReply(question) {
  const q = question.toLowerCase();

  if (q.includes('perfume')) {
    return 'Haan bhai perfume me Dunhill Desire best hai long lasting ke liye, Bleu de Chanel daily use ke liye solid hai. Konsa chahiye tujhe? 😎';
  }

  if (q.includes('padhai') || q.includes('study') || q.includes('exam')) {
    return 'Padhai ka tension mat le bhai, daily 2 ghante focused study kar, phone side me rakh. Pomodoro technique use kar - 25 min padhai, 5 min break. Ho jayega! 💪';
  }

  if (q.includes('business') || q.includes('paisa') || q.includes('income')) {
    return 'Business me bhai sabse pehle customer samajh. Local audience ko target kar, Instagram reels aur WhatsApp marketing use kar. Repeat customer banao, profit ayega! 🚀';
  }

  if (q.includes('coding') || q.includes('code') || q.includes('programming')) {
    return 'Coding ke liye bhai practice + projects matter karta hai. Daily 1 problem solve kar, mini project banao, concepts revise kar. Kaam ho jayega. 👨‍💻';
  }

  if (q.includes('love') || q.includes('relationship')) {
    return 'Love aur relationship me honesty sabse important hai. Apni feelings clear rakho, respect rakho, communication strong rakho. Bas ek dusre ko judge mat karo. ❤️';
  }

  return 'Solid sawal hai bhai! 👌 Main ispe detail me help kar sakta hu. Agar OpenAI key set hoga, toh asli AI reply milega; otherwise demo mode me answer de raha hu. Aur kya puchna hai?';
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const cleanedMessage = message.trim();

    if (!process.env.OPENAI_API_KEY) {
      return res.json({
        reply: getDemoReply(cleanedMessage),
        mode: 'demo'
      });
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: cleanedMessage }
      ],
      temperature: 0.8
    });

    const reply = completion.choices?.[0]?.message?.content || getDemoReply(cleanedMessage);

    return res.json({ reply, mode: 'live' });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({
      reply: getDemoReply(req.body?.message || 'Help me'),
      mode: 'demo'
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`PURA OS app running at http://localhost:${PORT}`);
});
