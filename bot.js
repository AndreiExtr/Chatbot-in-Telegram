const TelegramBot = require('node-telegram-bot-api');

// Вставьте сюда ваш токен, который вы получили от @BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Обрабатываем команду /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Добро пожаловать! Чем я могу помочь?');
});

// Обрабатываем все остальные текстовые сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Пример простого ответа
  if (text.toLowerCase() === 'привет') {
    bot.sendMessage(chatId, 'Привет! Как дела?');
  } else if (text.toLowerCase() === 'пока') {
    bot.sendMessage(chatId, 'До свидания!');
  } else {
    bot.sendMessage(chatId, 'Вы сказали: ' + text);
  }
});
