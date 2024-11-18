// import TelegramBot, { Message, ReplyKeyboardMarkup } from 'node-telegram-bot-api';
// import fs from 'fs';

// // Замените 'YOUR_TELEGRAM_BOT_TOKEN' на ваш токен
// const token = '7474480177:AAFfoxebjr2tsULnTJxOMIL86jllmXolL1Q';
// const bot = new TelegramBot(token, { polling: true });

// // Файл для хранения пользователей
// const usersFile = 'users.json';

// // Функция для загрузки пользователей из файла
// const loadUsers = () => {
// 	if (fs.existsSync(usersFile)) {
// 		const data = fs.readFileSync(usersFile, 'utf8');
// 		return JSON.parse(data);
// 	}
// 	return {};
// };

// // Функция для сохранения пользователей в файл
// const saveUsers = (users: Record<string, any>) => {
// 	fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
// };

// // Загрузка пользователей
// let users = loadUsers();

// // Обработка текстовых сообщений
// bot.on('message', (msg: Message) => {
// 	const chatId = msg.chat.id;

// 	// Проверяем, есть ли информация о пользователе
// 	if (msg.from) {
// 		// Проверяем, есть ли пользователь в списке
// 		if (!users[chatId]) {
// 			// Если нет, добавляем пользователя
// 			users[chatId] = {
// 				firstName: msg.from.first_name || 'Неизвестно',
// 				lastName: msg.from.last_name || 'Неизвестно',
// 				username: msg.from.username || 'Неизвестно',
// 				date: new Date().toISOString()
// 			};

// 			// Сохраняем обновленный список пользователей
// 			saveUsers(users);

// 			const response = `Вы успешно зарегистрированы!`;
// 			// Создание клавиатуры
// 			const keyboard: ReplyKeyboardMarkup = {
// 				keyboard: [
// 					[
// 						{ text: 'Выбор режима' },
// 						{ text: 'Подписка' }
// 					],
// 					[
// 						{ text: 'Поддержка ' }
// 					]
// 				],
// 				resize_keyboard: true, // Уменьшает размер клавиатуры под текст
// 				one_time_keyboard: true // Скрывает клавиатуру после нажатия
// 			};

// 			// Отправка ответа с клавиатурой
// 			bot.sendMessage(chatId, response, { reply_markup: keyboard });
// 		} else {
// 			// Если пользователь уже зарегистрирован, просто показываем клавиатуру
// 			const keyboard: ReplyKeyboardMarkup = {
// 				keyboard: [
// 					[
// 						{ text: 'Выбор режима' },
// 						{ text: 'Подписка' }
// 					],
// 					[
// 						{ text: 'Поддержка' }
// 					]
// 				],
// 				resize_keyboard: true, // Уменьшает размер клавиатуры под текст
// 				one_time_keyboard: true // Скрывает клавиатуру после нажатия
// 			};

// 			// Отправка клавиатуры без сообщения о регистрации
// 		}
// 	}

// 	const response = `ебанат, не пиши сюда больше`;

// 	// Отправка ответа
// 	bot.sendMessage(chatId, response);
// });

// console.log('Бот запущен...');




import parser from './parser/parser';

(async () => {
    await parser();
})();

// Фонбет и 1хбет
// Баскетбол, Россия ipbl.pro division, ipbl. Prime division, Китай CPBL: события ТМ ТБ(четверти) общий исход, разница от 3 очков, мин кэф 1.75
// 1хбет кибербаскетбол NBA 4x8
// Фонбет баскетбол NBA 4×8 значения те же что и выше