* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

html, body {
  height: 100%;
  background: #111b21;
}

body {
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-height: 100vh;
}

.app-shell {
  width: 100%;
  max-width: 900px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0b141a;
}

.header {
  background: #202c33;
  color: #fff;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.header-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.header-text b {
  font-size: 17px;
}

.header-text span {
  font-size: 12px;
  color: #8696a0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #25d366;
  border-radius: 50%;
  display: inline-block;
}

.chat-area {
  flex: 1;
  background-color: #0b141a;
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  overflow-y: auto;
  padding: 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.msg {
  max-width: 80%;
  padding: 10px 12px 8px;
  border-radius: 8px;
  font-size: 14.5px;
  line-height: 1.45;
  position: relative;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.18);
  word-wrap: break-word;
  white-space: pre-wrap;
}

.msg.user {
  align-self: flex-end;
  background: #005c4b;
  color: #e9edef;
  border-top-right-radius: 0;
}

.msg.bot {
  align-self: flex-start;
  background: #202c33;
  color: #e9edef;
  border-top-left-radius: 0;
}

.time {
  display: inline-block;
  font-size: 10px;
  color: #8696a0;
  margin-left: 10px;
  opacity: 0.8;
  float: right;
  margin-top: 5px;
}

.input-area {
  background: #202c33;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-area input {
  flex: 1;
  background: #2a3942;
  border: none;
  outline: none;
  color: #e9edef;
  padding: 12px 16px;
  border-radius: 24px;
  font-size: 15px;
}

.input-area input::placeholder {
  color: #8696a0;
}

.send-btn {
  background: #25d366;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #fff;
  transition: transform 0.2s ease;
}

.send-btn:hover {
  filter: brightness(1.05);
}

.send-btn:active {
  transform: scale(0.95);
}

@media (max-width: 640px) {
  .msg {
    max-width: 88%;
  }
}
