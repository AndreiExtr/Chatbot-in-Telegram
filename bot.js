const TelegramBot = require('node-telegram-bot-api');

// Вставьте сюда ваш токен, который вы получили от @BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Устанавка команды бота
bot.setMyCommands([
  { command: '/start', description: 'Начать работу с ботом' },
  { command: '/help', description: 'Помощь по командам' },
]);

// Команда /start
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp'); // Ссылка на стикер
  await bot.sendMessage(chatId, 'Добро пожаловать! Чем я могу помочь?');
});

// Команда /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Доступные команды:\n/start - Начать работу с ботом\n/help - Помощь по командам');
});

// Обрабатываем все остальные текстовые сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase(); // Приводим текст к нижнему регистру для проверки

  // Пример
  if (text === 'привет' || text === 'hi') {
    bot.sendMessage(chatId, 'Привет! Как дела?');
  } else if (text === 'пока' || text === 'good bye') {
    bot.sendMessage(chatId, 'До свидания!');
  } else if (!text.startsWith('/')) { // Игнорируем команды, так как они обрабатываются отдельно
    bot.sendMessage(chatId, 'введите корректный текст');
  }
});
