# Установка в ТГ
- В поиске Телеграм найдите BotFather – это конструктор чат-ботов. Общение в нем идет на английском языке.
- Нажмите «Запустить». Для создания нового бота потребуется ввести команду /newbot или выбрать ее в меню.
- Придумайте боту имя, которое будут видеть пользователи: оно может быть на русском языке.
- После этого введите никнейм уже строго на латинице и с окончанием bot – он будет использоваться в ссылке на бота.

# Разработка
- Установите необходимые зависимости:
```
npm install node-telegram-bot-api
```
- Создайте файл bot.js и добавьте код
```
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

```
- Замените 'YOUR_TELEGRAM_BOT_TOKEN' на ваш реальный токен, который вы получили от @BotFather при создании бота.
- Запустите бота:
```
node bot.js
```
